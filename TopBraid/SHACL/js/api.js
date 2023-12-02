/**
 * An RDF triple.
 * @typedef {Object} Triple
 * @property {NamedNode} subject - the subject node
 * @property {NamedNode} predicate - the predicate node (always a URI)
 * @property {GraphNode|boolean|number|string} object - the object node or JavaScript literal
 */

/**
 * The main entry point into the API (beside focusNode).
 */
const graph = {

	/**
	 * Adds a triple to the graph.
	 * @param {string|object} subject - the subject node of the triple to add (string values are interpreted as URIs)
	 * @param {string|object} predicate - the predicate node (string values are interpreted as URIs)
	 * @param object - the object node of the triple to add
	 */
	add(subject, predicate, object) {
		__jenaData.add(subject, predicate, object);
	},
	
	/**
	 * Creates a new blank node, with a yet unused ID, as a NamedNode.
	 * @returns {NamedNode}
	 */
	blankNode() {
		return new NamedNode(__jenaData.blankNode());
	},
	
	/**
	 * Checks if the graph contains any triple matching the provided subject, predicate, object combination,
	 * where each can be null to indicate a wildcard search.
	 * @param {string|object} subject  the subject to match or null (string values are interpreted as URIs)
	 * @param {string|object} predicate  the predicate to match or null (string values are interpreted as URIs)
	 * @param object  the object to match or null
	 */
	contains(subject, predicate, object) {
		return __jenaData.contains(subject, predicate, object);
	},

	/**
	 * Gets the URI of the currently active data graph.
	 * @returns {string}
	 */
	get dataGraphURI() {
		return __jenaData.getDataGraphURI();
	},
	
	set dataGraphURI(value) {
		throw "The data graph URI cannot be changed by assignment - use withDataGraph instead.";
    },
	
    /**
     * Evaluates a SPARQL expression, as used in BIND or FILTER.
     * You can use EXISTS { ... } expressions similar to SPARQL ASK queries.
     * @param {string} sparql  a SPARQL expression
     * @param {object} [bindings]  an optional object with name-value pairs to pre-bind for the query execution
     * @param {boolean} [literalNodesOnly] true to only return GraphNodes and neither boolean, number nor string
     * @returns the result of the evaluation, either as a plain JavaScript value or a GraphNode (or null)
     */
	eval(sparql, bindings, literalNodesOnly) {
		return RDFNodeUtil.castValue(__jenaData.eval(sparql, bindings, literalNodesOnly));
	},
	
	/**
	 * Returns a LiteralNode with datatype rdf:HTML with a given string as lexical form.
	 * @param {string} lex the lexical form
	 * @returns {LiteralNode}
	 */
	html(lex) {
		return new LiteralNode({lex: lex, datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML'});
	},
	
	/**
	 * Returns a LiteralNode with datatype rdf:langString with a given string as lexical form and a given language tag.
	 * @param {string} lex  the string value
	 * @param {string} lang  the language code
	 * @returns {LiteralNode}
	 */
	langString(lex, lang) {
		return new LiteralNode({lex: lex, lang: lang});
	},
	
	/**
	 * Produces an instance of LiteralNode from a given input value.
	 * @param {boolean|number|string|object} value  the input value
	 * @returns {LiteralNode} a LiteralNode or null if the value is null or undefined
	 */
	literal(value) {
		if(value == null || value == undefined) {
			return null;
		}
		else {
			return new LiteralNode(value);
		}		
	},
	
	/**
	 * Gets the local name part of a URI, e.g. the part after the last # or /.
	 * @param {string|object} uri  the URI string or named node with a uri field
	 * @returns {string} the local name, possibly the empty string
	 */
	localName(uri) {
		return __jenaData.localName(typeof uri == 'string' ? uri : uri.uri);
	},
	
	/**
	 * Produces an instance of NamedNode from a given URI string or object.
	 * @param {string|object} value  the URI string or an object with uri or qname fields
	 * @returns {NamedNode} the NamedNode or null if value is null or undefined
	 */
	namedNode(value) {
		if(value == null || value == undefined) {
			return null;
		}
		else if(typeof value == 'string') {
			return new NamedNode({uri: value});
		}
		else if(typeof value == 'object' && (value.uri || value.qname)) {
			return new NamedNode(value);
		}
		else {
			throw "namedNode cannot handle: " + value;
		}
	},
	
	/**
	 * Gets the namespace part of a URI, e.g. the part until the last # or /.
	 * @param {string} uri the URI string
	 * @returns {string} the namespace
	 */
	nameSpace(uri) {
		return __jenaData.nameSpace(uri);
	},

    /**
     * Assuming the current graph uses a URI policy (e.g. UUIDs), this returns the next suitable URI
     * for a new instance of a given class.
     * @param {NamedNode} type  the primary rdf:type to create a new URI for
     * @returns {string} the new URI or the default namespace for the (default) label-based policy
     */
    newURI(type) {
        let r = this.eval('<http://topbraid.org/swa#newResourceForAssetCollection>($type)', {type: type});
        return r ? r.uri : null;
    },

	/**
	 * Converts a value into an instance of GraphNode.
	 * String are converted into LiteralNode with datatype xsd:string.
	 * Numbers are converted into either xsd:integer or xsd:decimal LiteralNodes.
	 * Booleans are converted into true or false LiteralNodes.
	 * If the input object already represents an instance of a subclass of GraphNode then that object will be morphed into an GraphNode.
	 * If the input object is an object with a field { uri: "..." } or { qname: "..." } then the result will be a URI node.
	 * If the input object is an object with a field { lex: "..." } then the result will be a literal. Use lang: "..." for
	 * rdf:langString literals and datatype: xsd.float for specific datatypes. xsd:string is the default datatype.
	 * An exception is raised if no suitable conversion is possible.
	 * Returns null if the input value is null or undefined.
	 * @param value  the input object or primitive value 
	 * @returns {GraphNode}
	 */
	node(value) {
		if(value == null || value == undefined) {
			return null;
		}
		if(value.uri || value.qname || (value.isLiteral && !value.isLiteral())) {
			return new NamedNode(value);
		}
		else {
			return new LiteralNode(value);
		}
	},
	
	/**
	 * Converts a URI into a qname, using the prefixes defined for the data graph.
	 * @param {string|object} uri  the URI string or named node with a uri field
	 * @returns {string} the abbreviated name or null if no suitable prefix exists
	 */
	qname(uri) {
		return __jenaData.qname(typeof uri == 'string' ? uri : uri.uri);
	},

	/**
	 * Deletes a triple (or multiple triples) from the (base) graph.  If the triple is included from an imported sub-graph
	 * then it will remain in those.
	 * The function can take null as wildcards for any subject, predicate or object. In this case it will remove all
	 * matching triples.
	 * @param {string|object} subject  the subject node of the triple to delete (string values are interpreted as URIs)
	 * @param {string|object} predicate  the subject node (string values are interpreted as URIs)
	 * @param object - the object node of the triple to delete
	 */
	remove(subject, predicate, object) {
		__jenaData.remove(subject, predicate, object);
	},
	
    /**
     * Performs a SPARQL SELECT query.
     * @param {string} queryString  a SPARQL SELECT query
     * @param {object} [bindings]  an optional object with name-value pairs to pre-bind for the query execution
     * @param {boolean} [literalNodesOnly] true to only return GraphNodes and neither boolean, number nor string
     * @returns {ResultSet} the result bindings
     */
	select(queryString, bindings, literalNodesOnly) {
		return RDFNodeUtil.castBindings(__jenaData.select(queryString, bindings, literalNodesOnly));
	},
    
    /**
     * Runs an SWP element with a provided set of parameters.
     * This can not be used in read-only mode and should be used by experienced TopBraid users only.
     * 
     * NOTE: This function is likely going to be deleted in future versions.  Instead users are encouraged to explicitly
     * mark the SWP scripts that they want to call, using ui:scriptFunctionReadOnly and then use the generated functions.
     * Meanwhile this function here is kept to simplify experiments.
     * 
     * @param {string} viewClass  the qname of the view class in the ui:graph, e.g. 'ex:MyElement'
     * @param {object} params  name-value pairs for the arguments of the element, typically as GraphNodes
     * @returns {string} the SWP response as a string
     */
    swp(viewClass, params) {
    	return __jenaData.swp(viewClass, params);
    },
    
    /**
     * Queries the graph and produces an array of objects with the fields { subject, predicate, object }
     * for each triple that matches the given match subject, predicate and object (any of which may be null
     * to act as a wildcard).
     * Note that this may potentially return a very large number of matches, so needs to be handled with care.
     * Also note that this will only return the asserted triples in the graph.
     * @param {NamedNode} matchSubject the subject to match against or null for any
     * @param {NamedNode} matchPredicate the predicate to match against or null for any
     * @param {NamedNode|boolean|number|string} matchObject the object to match against or null for any
     * @param {boolean} [literalNodesOnly] true to only return GraphNodes and neither boolean, number nor string for the object position
     * @returns {Triple[]} an array of objects with subject, predicate and object fields
     */
    triples(matchSubject, matchPredicate, matchObject, literalNodesOnly) {
        // For simplicity we now just use the SPARQL engine - could be optimized in the future if performance becomes an issue
        return this.select('SELECT * { ?subject ?predicate ?object }', {
            subject: matchSubject,
            predicate: matchPredicate,
            object: matchObject
        }, literalNodesOnly).bindings;
    },
    
    /**
     * Performs a SPARQL UPDATE. This only works if the graph is in read/write mode.
     * It can only modify the default query graph, i.e. don't use INSERT { GRAPH ... { } } or such.
     * @param {string} updateString  a SPARQL UPDATE request string
     * @param {object} [bindings]  an optional object with name-value pairs to pre-bind for the update execution
     */
    update(updateString, bindings) {
    	__jenaData.update(updateString, bindings);
    },
    
    /**
     * Gets an uploaded file from a provided ID.
     * @param {string} fileId  the ID of the file, typically provided as parameter value from an Action
     * @returns {UploadedFile}
     * @deprecated Moved to IO.uploadedFile
     */
    uploadedFile(fileId) {
    	return new UploadedFile(fileId);
    },
	
	/**
	 * Converts a qname into a URI string.
	 * @param {string} qname  the qname
	 * @returns {string} the URI derived from the qname, or the original qname if no suitable prefix was found
	 */
	uri(qname) {
		return __jenaData.uri(qname);
	},
	
	/**
	 * Temporarily switches the active data graph to a given named graph and executes a function with that active graph.
	 * The new graph will also become the default graph of SPARQL queries.
	 * After the function has been executed, the previously active data graph will become active again.
	 * Care needs to be taken if the callback is going to write to the new graph, as such changes may not be recorded
	 * correctly by the surrounding code.  For example, Preview functionality may have side effects and could not be undone.
	 * @param {string|NamedNode}  the URI of the new named graph
	 * @param a function (that has no parameters) that will be called (immediately)
	 * @returns the result of the callback
	 */
	withDataGraph(graphURI, callback) {
        if(typeof graphURI === 'object') {
            graphURI = graphURI.uri;
        }
        if(!graphURI) {
            throw "Missing graphURI in graph.withDataGraph";
        }
		let old = __jenaData.getDataGraphURI();
		__jenaData.enterDataGraphURI(graphURI);
        try {
            let result = callback();
            return result;
        }
        finally {
            __jenaData.exitDataGraphURI(old);
        }
	},
	
	/**
	 * Returns a LiteralNode with datatype rdf:XMLLiteral with a given string as lexical form.
	 * @param {string} lex  the lexical form
	 * @returns {LiteralNode}
	 */
	xml(lex) {
		return new LiteralNode({lex: lex, datatype: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral'});
	},
}


/**
 * GraphNode is the base class of all graph node types.
 */
class GraphNode {

    constructor(obj) {
    	if(obj == null || obj == undefined) {
    		throw "Cannot create GraphNode without constructor parameter";
    	}
    	
    	if(typeof obj == 'object' && obj.getLiteralDatatypeURI) {
    		this.zzzJenaNode = obj;
    	}
    	else {
    		this.zzzJenaNode = __jenaData.asJenaNode(obj);
    		if(!this.zzzJenaNode) {
        		throw "Cannot create Jena Node from supplied constructor parameter " + obj;    			
    		}
    	}
    }
    
    /**
     * Compares this node with another node or value. For example, the other might be a string, and
     * equals would return true if this is a corresponding xsd:string literal.
     * @param other  the value to compare this with
     * @returns {boolean} true if this is equal to the other value
     */
    equals(other) {
    	return __jenaData.equalNodes(this, other);
    }

    /**
     * Evaluates a SPARQL expression with $this bound to the current node.
     * @param {string} sparql  a SPARQL expression such as "EXISTS { $this a g:Country }" or "ex:function($this)"
     * @param {object} [bindings]  an optional object with name-value pairs to pre-bind for the query execution
     * @param {boolean} [literalNodesOnly] true to only return GraphNodes and neither boolean, number nor string for the object position
     * @returns the result of the evaluation
     */
    eval(sparql, bindings, literalNodesOnly) {
    	return __jenaData.evalThis(this.zzzJenaNode, sparql, bindings, literalNodesOnly);
    }

    /**
     * Returns true if this node represents an RDF Blank Node.
     * @returns {boolean}  true if this is a blank node, false for literals and URIs
     */
    isBlankNode() {
   		return this.zzzJenaNode.isBlank();
    }
    
    /**
     * Returns true if this node represents an RDF literal.
     * @returns {boolean}  true if this is a Literal, false for blank nodes and URIs
     */
    isLiteral() {
   		return this.zzzJenaNode.isLiteral();
    }

    /**
     * Returns true if this node represents a URI.
     * @returns {boolean}  true if this is a URI, false for blank nodes and literals
     */
    isURI() {
   		return this.zzzJenaNode.isURI();
    }
    
    /**
     * Performs a SPARQL SELECT query with $this bound to the current node.
     * @param {string} sparql  a SPARQL SELECT query
     * @param {object} [bindings]  an optional object with name-value pairs to pre-bind for the query execution
     * @param {boolean} [literalNodesOnly] true to only return GraphNodes and neither boolean, number nor string
     * @returns {ResultSet} the result bindings
     */
    select(sparql, bindings, literalNodesOnly) {
    	return RDFNodeUtil.castBindings(__jenaData.selectThis(this.zzzJenaNode, sparql, bindings, literalNodesOnly));
    }

    /**
     * Produces a string rendering of this node. For literals this is simply the lexical form.
     * For URIs and blank nodes, it will select a suitable label, typically derived from rdfs:label.
     * @returns {string}
     */
    toString() {
    	if(this.isLiteral()) {    		
    		return this.lex;
    	}
    	else {
    		return __jenaData.getDisplayLabel(this.zzzJenaNode)
    	}
    }
    
    // TODO: Inject additional methods defined at rdfs:Resource
}


/**
 * The class of graph nodes that are representing RDF literals.
 */
class LiteralNode extends GraphNode {
    
    /**
     * The URI of the datatype, if this node represents a literal.
     * @readonly
     * @returns {string} the datatype URI
     */
    get datatype() {
    	if(this.isLiteral()) {
    		return this.zzzJenaNode.getLiteralDatatypeURI();
    	}
    }
    
    set datatype(value) {
    	throw "The datatype field of a literal is read-only. Create a new literal using graph.literal() etc.";
    }
    
    /**
     * The language code, if this node represents a literal. Returns undefined otherwise.
     * @readonly
     * @returns {string} the language code such as "en"
     */
    get lang() {
    	if(this.isLiteral()) {
    		return this.zzzJenaNode.getLiteralLanguage();
    	}
    }
    
    set lang(value) {
    	throw "The lang field of a literal is read-only. Create a new literal using graph.literal() etc.";
    }
    
    /**
     * The lexical (string) form, if this node represents a literal. Returns undefined otherwise.
     * @readonly
     * @returns {string} the literal, always as a string
     */    
    get lex() {
    	if(this.isLiteral()) {
    		return this.zzzJenaNode.getLiteralLexicalForm();
    	}
    }
    
    set lex(value) {
    	throw "The lex field of a literal is read-only. Create a new literal using graph.literal() etc.";
    }
	
	/**
	 * Converts this literal into a JavaScript boolean, based on the lexcial form
	 * ("true", "1", "false", "0" are permitted).
	 * Ideally, check datatype == xsd.boolean beforehand.
	 * An exception is thrown in all other cases.
	 * @returns {boolean}
	 */
	asBoolean() {
		let lex = this.lex;
		if(lex == 'true' || lex == '1') {
			return true;
		}
		else if(lex == 'false' || lex == '0') {
			return false;
		}
		throw "asBoolean cannot cast: " + lex;
	}
	
	/**
	 * Converts this literal into a JavaScript number.
	 * Will try to cast the lexical form using parseFloat.
	 * Typically used in conjunction with isNumeric().
	 * @returns {number}
	 */
	asNumber() {
		return parseFloat(this.lex);
	}
	
	/**
	 * Checks if this literal has a numeric datatype such as xsd:integer or xsd:decimal.
	 * @returns {boolean}
	 */
	isNumeric() {
		return __jenaData.isNumeric(this.datatype);
	}

    /**
     * Attempts to convert this into a primitive JavaScript literal of type boolean, string or number.
     * If that is not possible due to the datatype, this returns this unchanged.
     * @returns {boolean|number|string|LiteralNode}
     */
    simplify() {
        if(this.isNumeric()) {
            return this.asNumber();
        }
        else if(this.datatype == 'http://www.w3.org/2001/XMLSchema#boolean') {
            return this.asBoolean();
        }
        else if(this.datatype == 'http://www.w3.org/2001/XMLSchema#string') {
            return this.lex;
        }
        else {
            return this;
        }
    }
}


/**
 * The class of graph nodes that are representing URIs or blank nodes.
 */
class NamedNode extends GraphNode {

	constructor(obj) {
		super(typeof obj == 'string' ? { uri: obj } : obj);
	}
    
    /**
     * The URI string of nodes where isURI() returns true, and '_:' + blankNodeId for those where isBlankNode() returns true.
     * @readonly
     * @returns {string} the URI string
     */
    get uri() {
    	if(this.isURI()) {
    		return this.zzzJenaNode.getURI();
    	}
    	else if(this.isBlankNode()) {
    		return "_:" + this.zzzJenaNode.getBlankNodeLabel();
    	}
    }
    
    set uri(value) {
    	throw "The uri field of a named node is read-only. Create a new node using graph.namedNode() or the factory methods for each namespace prefix.";
    }


    /**
     * Adds a statement (this, predicate, object) to the graph.
	 * @param {string|object} predicate - the predicate node (string values are interpreted as URIs)
	 * @param object - the object node of the triple to add
     */
    add(predicate, object) {
        graph.add(this, predicate, object);
    }

    
    /**
     * Checks whether this is an instance of a given (RDFS) class.
     * @param {object|string} type  either the NamedNode of a class or a string with the URI of the class
     * @returns {boolean} true if this has the type or a subclass thereof as its rdf:type, false otherwise
     */
    instanceOf(type) {
    	return __jenaData.instanceOf(this.zzzJenaNode, type);
    }


    /**
     * Removes the statement (this, predicate, object) from the graph.
	 * @param {string|object} predicate - the predicate node (string values are interpreted as URIs)
	 * @param object - the object node of the triple to remove
     */
    remove(predicate, object) {
        graph.remove(this, predicate, object);
    }


    /**
     * Gets an array of shapes that apply to this node, based on sh:targetClass, dash:applicableToClass, and rdf:type.
     * This only returns the directly applicable shapes but not their superclasses.
     * Deactivated shapes are skipped.
     * @returns {sh_Shape[]} an array of shape objects
     */
    shapes() {
    	let results = new Set();
    	focusNode.values(rdf.type).forEach(type => {
    	    if(type instanceof NamedNode) {
    	        if(type.instanceOf(sh.Shape)) {
    	            results.add(type);
    	        }
    	    }
    	    rdfs.asClass(type).walkSuperclasses((cls) => {
    	        graph.triples(null, dash.applicableToClass, cls).forEach(triple => {
    	            results.add(triple.subject);
    	        })
    	        graph.triples(null, sh.targetClass, cls).forEach(triple => {
    	            results.add(triple.subject);
    	        })
    	    })
    	})
    	let array = [];
    	results.forEach(shape => {
    		if(!graph.contains(shape, sh.deactivated, true)) {
    			array.push(shape);
    		}
    	});
    	return array;
    }	

    
    /**
     * Gets the value of this node for a given path.  If multiple values exist then it will make a random choice.
     * @param {string|object} path  either in SPARQL 1.1 syntax or a named node with the URI of a property
     * @param asClass  an optional subclass of NamedNode to convert the result into 
     * @return the path value as GraphNode or primitive JavaScript value, or null
     */
    value(path, asClass) {
    	let simple = typeof path == 'object';
    	let jenaNode = __jenaData.value(this.zzzJenaNode, simple ? path.uri : path, simple);
    	if(jenaNode != null) {
            return RDFNodeUtil.castValue(jenaNode, asClass);
    	}
    	else {
    		return null;
    	}
    }
    
    /**
     * Gets all values of this node for a given path as an array.
     * @param {string|object} path  either in SPARQL 1.1 syntax or a named node with the URI of a property
     * @param asClass  an optional subclass of NamedNode to convert the results into
     * @param {boolean} indexed  true to return the values by their dash:index (if exists) 
     * @return an arracy of path values as GraphNodes or primitive JavaScript values
     */
    values(path, asClass, indexed) {
    	let simple = typeof path == 'object';
    	let jenaValues = indexed ? 
    			__jenaData.valuesIndexed(this.zzzJenaNode, simple ? path.uri : path, simple) : 
    			__jenaData.values(this.zzzJenaNode, simple ? path.uri : path, simple);
    	let results = [];
    	for(let i = 0; i < jenaValues.length; i++) {
    		results.push(RDFNodeUtil.castValue(jenaValues[i], asClass));
    	}
   		return results;
    }
}
Object.defineProperty(LiteralNode.prototype, 'datatype', {enumerable: true});
Object.defineProperty(LiteralNode.prototype, 'lang', {enumerable: true});
Object.defineProperty(LiteralNode.prototype, 'lex', {enumerable: true});
Object.defineProperty(NamedNode.prototype, 'uri', {enumerable: true});


/**
 * The class of SPARQL result sets, typically produced by a SELECT query.
 */
class ResultSet {

	constructor(object) {
		/**
		 * The array of variable names.
		 * @type {string[]}
		 */
		this.vars = object.vars;
		if(!this.vars || !Array.isArray(this.vars)) {
			throw "Missing or invalid vars";
		}
		
		/**
		 * The array of bindings, which are objects with the variable names as keys.
		 * @type {object[]}
		 */
		this.bindings = object.bindings;
		if(!this.bindings || !Array.isArray(this.bindings)) {
			throw "Missing or invalid bindings";
		}
	}
}


/**
 * A tag string function that inserts JavaScript expressions as well-formed SPARQL expressions.
 * For example, use sparql`ASK { ${subject} rdfs:label ?label }` where subject is a GraphNode.
 * This is an alternative to using pre-bound variables (e.g. the bindings argument of graph.select).
 * Note that producing distinct strings carries a bit of performance overhead (for parsing)
 * while pre-bound variables can reuse an already parsed query object, at least within the same request.
 * However, string substitution can be a more compact, more natural and more flexible solution.
 * @param strings  the string segments
 * @param ...values  the values to insert
 * @returns {string} a string using SPARQL syntax substitution
 */
function sparql(strings, ...values) {
    let str = '';
    for(let i = 0; i < strings.length; i++) {
        str += strings[i];
        if(i < values.length) {
            let value = values[i];
            let vs = __jenaData.sparqlExpressionString(value);
            str += vs;
        }
    }
    return str;
}


// Utility functions, likely to become private API
const RDFNodeUtil = {
		
	castBindings: (object) => {
		let bindings = [];
		let list = object.bindings;
		for(let i = 0; i < list.length; i++) {
			let binding = list[i];
			let b = {};
			for(let varName in binding) {
				let value = binding[varName];
				b[varName] = RDFNodeUtil.castValue(value);
			}
			bindings.push(b);
		}
		return {
			bindings: bindings,
			vars: object.vars,
		}
	},
	
	castObject: (object) => {
		for(let key in object) {
			object[key] = RDFNodeUtil.castValue(object[key]);
		}
		return object;
	},
	
	castValue: (value, asClass) => {
		if(value == null || value == undefined) {
			return null;
		}
		else if(typeof value == 'string' || typeof value == 'number' || typeof value == 'boolean') {
            return value;
        }
        else if(asClass) {
            return new asClass(value);
        }
        else {
            return graph.node(value);
        }
    },
	
	castValues: (list, asClass) => {
		let results = [];
		for(let i = 0; i < list.length; i++) {
			results.push(RDFNodeUtil.castValue(list[i], asClass));
		}
		return results;
	},
	
	createInstance: (cls, typeURI, props) => {
		let instance;
		if(props) {
			instance = props.uri || props.qname ? new cls(props) : new cls(graph.blankNode());
			let copy = {};
			Object.assign(copy, props);
			delete copy.uri;
			delete copy.qname;
			Object.assign(instance, copy);
		}
		else {
			instance = new cls(graph.blankNode());
		}
		graph.add(instance, 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', { uri: typeURI });
		return instance;
	},
	
	// Provides access to the graph variable in case it's overloaded in the scope
	getGraph: () => {
		return graph;
	}
}
