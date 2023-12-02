/**
 * Represents the graph types, aka asset collection types, of the system.
 */
class GraphType {

    constructor(uri) {
        this._uri = uri;
    }

    /**
     * Gets the plural display label, e.g. "Ontologies".
     */
    get pluralLabel() {
        return graph.eval('teamwork:pluralProjectTypeLabel(?projectType)', { projectType: { uri: this.uri }})
    }

    /**
     * Gets the singular display label, e.g. "Ontology".
     */
    get singularLabel() {
        return graph.eval('teamwork:singularProjectTypeLabel(?projectType)', { projectType: { uri: this.uri }})
    }

    /**
     * The URI of this graph type, e.g. 'http://edg.topbraid.solutions/model/DataAssetsProjectType' for Data Asset collections.
     */
    get uri() {
        return this._uri;
    }
}
Object.defineProperty(GraphType.prototype, 'pluralLabel', {enumerable: true});
Object.defineProperty(GraphType.prototype, 'singularLabel', {enumerable: true});
Object.defineProperty(GraphType.prototype, 'uri', {enumerable: true});