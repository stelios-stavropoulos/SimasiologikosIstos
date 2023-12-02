/**
 * Utility functions operating on GraphNodes.
 */
const GraphNodeUtil = {
		
	/**
	 * Produces a JSON object by recursively walking an RDF node (subject) and its (object) values.
	 * Each NamedNode is represented by a JSON object that has the property values as fields, so that the value key
	 * is the URI of each predicate, and the values are arrays of nested objects or primitive values.
	 * @param {NamedNode} node - the current named node
	 * @returns {Object}
	 */
	jsonValuesTree: (node) => {
	    if(node.isBlankNode()) {
	        let obj = {};
	        graph.triples(node).forEach(t => {
	            let values = obj[t.predicate.uri];
	            if(!values) {
	                values = [];
	                obj[t.predicate.uri] = values;
	            }
	            if(t.object instanceof NamedNode) {
	                values.push(GraphNodeUtil.jsonValuesTree(t.object));
	            }
	            else if(t.object instanceof LiteralNode) {
	                values.push({
	                    lex: t.object.lex,
	                    datatype: t.object.datatype
	                })
	            }
	            else {
	                values.push(t.object);
	            }
	        })
	        return obj;
	    }
	    else {
	        return {
	            label: node.toString(),
	            uri: node.uri,
	        }
	    }
	}
}