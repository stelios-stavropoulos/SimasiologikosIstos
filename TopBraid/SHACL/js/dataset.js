/**
 * A collection of functions to operate on the named graphs in TopBraid.
 */
const dataset = {

    /**
     * Returns true if the current user has (at least) read access to a given graph.
     * @param {string} graphURI the URI of the graph to check
     * @returns {boolean}
     */
    canRead(graphURI) {
        return this.contains(graphURI) && graph.eval('smf:canRead($graphURI)', { graphURI: { uri: graphURI }});
    },

    /**
     * Returns true if the current user has write access to a given graph.
     * @param {string} graphURI the URI of the graph to check
     * @returns {boolean}
     */
    canWrite(graphURI) {
        return this.contains(graphURI) && graph.eval('smf:canWrite($graphURI)', { graphURI: { uri: graphURI }});
    },

    /**
     * Checks if a given named graph is known to this dataset and backed by a file (including connector files to databases).
     * @param {string} graphURI the URI of the graph to look for
     * @returns {boolean} true if there is a graph with that URI
     */
    contains(graphURI) {
        return !!graphURI && !!graph.eval('smf:file($graphURI)', { graphURI: graphURI});
    },

    /**
     * Gets an array of the URIs of all known graphs in the dataset.
     * Note that the current user may not have read access to all of them.
     * @returns {string[]}
     */
    graphs() {
        return graph.select(`
            SELECT DISTINCT ?graph {
                ?path tops:files ( "/" true )
                BIND (smf:baseURI(?path) AS ?graph) .
                FILTER bound(?graph)
            }`).bindings.map(binding => binding.graph.uri);
    },

    /**
     * For a given (master) graph, this returns the graph type, aka asset collection type.
     * If the graph is not a master graph, this returns null.
     * @param {string} graphURI the URI of the master graph to query
     * @returns {GraphType} the GraphType or null
     */
    graphType(graphURI) {
        let t = graph.eval('teamwork:getProjectType($graph)', { graph: { uri: graphURI }})
        return t ? new GraphType(t.uri) : null;
    },

    /**
     * Gets an array of all registered GraphTypes in the system.
     * All installations include the Ontology GraphType, others depend on the licensed package.
     * @returns {GraphType[]}
     */
    graphTypes() {
        return graph.select(`
            SELECT ?projectType
            WHERE {
                GRAPH ui:graph {
                    BIND (teamwork:product() AS ?product) .
                    ?product teamwork:defaultProjectType ?projectType .
                    FILTER (teamwork:hasProjectTypeLicense(?projectType))
                }
            }`).bindings.map(binding => new GraphType(binding.projectType.uri))
    },

    /**
     * Attempts to find the master graph URI for a given graph URI.
     * The graph URI must either be of the form "urn:x-evn-master:XY" or "urn:x-evn-master:XY:UserName"
     * or a workflow graph "urn:x-evn-tag:XY:UserName".
     * It also handles cases where the graph is with imports.
     * @param {string} graphURI the graph URI
     * @returns {string} the master graph URI or null if the input URI does not match any of the expected patterns.
     */
    masterGraph(graphURI) {
        let r = graph.select(`
            SELECT ?masterGraph {
                BIND (teamwork:graphIdFromGraph(ui:graphWithoutImports($graph)) AS ?id)
                BIND (teamwork:masterGraph(?id) AS ?masterGraph) .
                FILTER bound(?masterGraph)
            }`, {
                graph: { uri: graphURI }
            });
        if(r.bindings.length > 0) {
            return r.bindings[0].masterGraph.uri;
        }
        else {
            return null;
        }
    },

    /**
     * Extracts the graphId part of a given graph URI.
     * See dataset.masterGraph() for the supported URI kinds.
     * @param {string} graphURI  the graph URI
     * @returns {string} the ID part, e.g. "XY" for "urn:x-evn-master:XY"
     */
    masterGraphId(graphURI) {
        let r = graph.select(`
            SELECT ?graphId {
                BIND (teamwork:graphIdFromGraph(ui:graphWithoutImports($graph)) AS ?graphId)
            }`, {
                graph: { uri: graphURI }
            });
        if(r.bindings.length > 0) {
            return r.bindings[0].graphId;
        }
        else {
            return null;
        }
    },

    /**
     * Gets an array of the URIs of all master graphs in the dataset that the current user can read.
     * The strings will be of the form "urn:x-evn-master:XY" where XY is the graphId.
     * @returns {string[]}
     */
    masterGraphs() {
        return graph.select(`
            SELECT ?masterGraph {
                ()	<http://topbraid.org/teamwork#readableGraphsUnderTeamControl> (?masterGraph) 
            }`).bindings.map(binding => binding.masterGraph.uri);
    },

    /**
     * Gets the URI of a teamwork graph (.tch) for a given master graph.
     * @param {string} masterGraphURI the URI of a master graph, e.g. "urn:x-evn-master:geo"
     * @returns {string} the associated TCH graph
     */
    teamGraph(masterGraphURI) {
        return masterGraphURI + '.tch';
    },

    /**
     * Gets a variant of an input graph URI that also includes the owl:imports.
     * This uses a platform-specific URI naming convention that will be understood by most dataset operations.
     * This is equivalent to the SPARQL function ui:graphWithImports(?graphURI).
     * @param {string} graphURI the URI to convert into the with-imports variation
     * @returns {string} the graph URI with imports
     */
    withImports(graphURI) {
        let result = graph.eval('ui:graphWithImports($graph)', { graph: { uri: graphURI }});
        return result ? result.uri : null;
    },

    /**
     * Gets a variant of an input graph URI that excludes the owl:imports.
     * This is the inverse operation of dataset.withImports(graphURI).
     * @param {string} graphURI the URI to convert into the without-imports variation
     * @returns {string} the input graph URI
     */
    withoutImports(graphURI) {
        let result = graph.eval('ui:graphWithoutImports($graph)', { graph: { uri: graphURI }});
        return result ? result.uri : null;
    },
}
