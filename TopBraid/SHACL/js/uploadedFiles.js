
/**
 * The class of (uploaded) files, providing access to the content, mime type etc.
 * The typical workflow is that a dash:Action requests a user to upload a file by setting dash:mimeTypes
 * on one of its parameters, and keeps its ID as a reference.
 * That fileId string is used to construct instances of this class here.
 * 
 * The name is not simply 'File' to avoid clashes with the namesake class from the W3C Web API.
 */
class UploadedFile {

	/**
	 * Constructs a new instance based on a file ID.
	 */
	constructor(fileId) {
		this.fileId = fileId;
	}
	
	/**
	 * Assuming this file represents a spreadsheet, cast it into a Spreadsheet instance.
	 * This is only supported for files with suitable mime types.
     * Note this will load the whole spreadsheet into memory but provides random access to all rows and cells.
	 * @returns {UploadedSpreadsheet}
	 */
	asSpreadsheet() {
		let __spreadsheet = __jenaData.uploadedFile(this.fileId).asSpreadsheet();
		return new UploadedSpreadsheet(__spreadsheet);
	}

	/**
	 * Assuming this file represents a .csv or .tsv spreadsheet, cast it into a SpreadsheetIterator instance.
     * Use this if your spreadsheet is potentially very large.
	 * @returns {SpreadsheetIterator}
	 */
    asSpreadsheetIterator() {
		let __iterator = __jenaData.uploadedFile(this.fileId).asSpreadsheetIterator(__jenaData);
		return new SpreadsheetIterator(__iterator);
    }

	/**
	 * Assuming this file is a valid XML document, cast it into an XMLNode.
	 * @returns {XMLNode}
	 */
	asXML() {
		return new XMLNode(__jenaData.uploadedFile(this.fileId).asXML());
	}
	
	/**
	 * Gets the (client) name under which this file was uploaded to the server.
	 * @return {string}
	 */
	get name() {
		return __jenaData.uploadedFile(this.fileId).name();
	}
	
	/**
	 * Assuming this is a text file (e.g. JSON, XML, HTML, CSV), this gets the content of the file as a string.
	 */
	get text() {
		return __jenaData.uploadedFile(this.fileId).text();
	}
	
	/**
	 * Gets the mime type of the file as a string.
	 */
	get type() {
		return __jenaData.uploadedFile(this.fileId).type();
	}
}
Object.defineProperty(UploadedFile.prototype, 'name', {enumerable: true});
Object.defineProperty(UploadedFile.prototype, 'text', {enumerable: true});
Object.defineProperty(UploadedFile.prototype, 'type', {enumerable: true});


/**
 * The class of spreadsheets that are opened in a streaming fashion, row by row.
 * Use UploadedFile.asSpreadsheetIterator() to create instances.
 * This class implements the Iterable protocol, e.g. use for(const row of s) { ... } to iterate over all rows.
 */
class SpreadsheetIterator {
	
	constructor(__iterator) {
		this.__iterator = __iterator;
	}

    /**
     * Closes the iterator, immediately releasing any file handles and memory that it might hold on to.
     * This is otherwise done automatically by the end of the surrounding script.
     */
    close() {
        this.__iterator.close();
    }
	
	/**
	 * The names of the columns.
	 * @returns {string[]}
	 */
	get columnNames() {
		return this.__iterator.columnNames();
	}

    /**
     * Gets the next item, following the JavaScript Iterator protocol.
     */
    next() {
        let row = this.__iterator.next();
        if(row) {
            return {
                done: false,
                value: row,
            }
        }
        else {
            return {
                done: true
            }
        }
    }

    [Symbol.iterator]() {
        this.__iterator.close();
        return this;
    }
}
Object.defineProperty(SpreadsheetIterator.prototype, 'columnNames', {enumerable: true});


/**
 * The class of (uploaded) Spreadsheets, providing access to the columns, rows etc.
 * Use UploadedFile.asSpreadsheet() to create instances.
 */
class UploadedSpreadsheet {
	
	constructor(__spreadsheet) {
		this.__spreadsheet = __spreadsheet;
	}
		
	/**
	 * Gets the value in a given row and column, as a string, number, boolean or LiteralNode.
	 * @param {number} rowIndex  the index of the row, starting at 0
	 * @param {number} [columnIndex]  the index of the column, starting at 0, defaulting to 0
	 * @param {number} [sheetIndex]  the index of the sheet, starting at 0, defaulting to 0
	 */
	cell(rowIndex, columnIndex, sheetIndex) {
		return RDFNodeUtil.castValue(this.__spreadsheet.cell(rowIndex, columnIndex || 0, sheetIndex || 0));
	}
	
	/**
	 * Gets the names of the columns on a given sheet.
	 * @param {number} [sheetIndex]  the index of the sheet, starting at 0, defaulting to 0
	 * @returns {string[]}
	 */
	columnNames(sheetIndex) {
		return this.__spreadsheet.columnNames(sheetIndex || 0);
	}
	
	/**
	 * Gets the number of rows on a given sheet.
	 * @param {number} [sheetIndex]  the index of the sheet, starting at 0, defaulting to 0
	 * @returns {number}
	 */
	rowCount(sheetIndex) {
		return this.__spreadsheet.rowCount(sheetIndex || 0);
	}
	
	/**
	 * Gets a given row as a JavaScript object, with the column names as object keys
	 * and strings, numbers, booleans or LiteralNodes as values.
	 * @param {number} rowIndex  the index of the row, starting at 0
	 * @param {number} [sheetIndex]  the index of the sheet, starting at 0, defaulting to 0
	 * @returns {object}
	 */
	row(rowIndex, sheetIndex) {
		return RDFNodeUtil.castObject(this.__spreadsheet.row(rowIndex, sheetIndex || 0));
	}
	
	/**
	 * Gets all rows as an array of JavaScript objects, as in the row function.
	 * @param {number} [sheetIndex]  the index of the sheet, starting at 0, defaulting to 0
	 * @returns {object[]}
	 */
	rows(sheetIndex) {
		let rows = [];
		let count = this.rowCount(sheetIndex);
		for(let i = 0; i < count; i++) {
			rows.push(this.row(i, sheetIndex));
		}
		return rows;
	}
	
	/**
	 * Gets the names of the sheets (at least one) as a string array.
	 * @returns {string[]}
	 */
	sheetNames() {
		return this.__spreadsheet.sheetNames();
	}
}


/**
 * Represents an XML DOM Node as delivered by UploadedFile.asXML().
 * In addition to the declared fields and methods, nodes that represent elements have all attributes
 * of the XML node as direct properties.
 * If attribute names clash with declared fields or methods then an underscore is appended.
 */
class XMLNode {
	
	constructor(zzzNode) {
		this.zzzNode = zzzNode;
		if(zzzNode.isElement()) {
			let as = zzzNode.attributes();
			Object.assign(this, as);
		}
	}
	
	/**
	 * Gets the child nodes as instances of XMLNode.
	 * @returns {XMLNode[]}
	 */
	get childNodes() {
		let nodes = this.zzzNode.childNodes();
		let array = [];
		for(let i = 0; i < nodes.length; i++) {
			array.push(new XMLNode(nodes[i]));
		}
		return array;
	}
	
	/**
	 * Checks if this node represents a CDATA section.
	 * @returns {boolean}
	 */
	isCDATASection() {
		return this.zzzNode.isCDATASection();
	}
	
	/**
	 * Checks if this node represents a Comment.
	 * @returns {boolean}
	 */
	isComment() {
		return this.zzzNode.isComment();
	}
	
	/**
	 * Checks if this node represents an element.
	 * @returns {boolean}
	 */
	isElement() {
		return this.zzzNode.isElement();
	}
	
	/**
	 * Checks if this node represents a text node.
	 * @returns {boolean}
	 */
	isText() {
		return this.zzzNode.isText();
	}
	
	/**
	 * Returns the local name.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getLocalName--
	 * @returns {string}
	 */
	get localName() {
		return this.zzzNode.localName();
	}
	
	/**
	 * Returns the namespace URI.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getNamespaceURI--
	 * @returns {string}
	 */
	get namespaceURI() {
		return this.zzzNode.namespaceURI();
	}
	
	/**
	 * Gets the node name, e.g. the tag name for element nodes.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getNodeName--
	 * @returns {string}
	 */
	get nodeName() {
		return this.zzzNode.nodeName();
	}
	
	/**
	 * Gets the node value, e.g. the content of a text node.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getNodeValue--
	 * @returns {string}
	 */
	get nodeValue() {
		return this.zzzNode.nodeValue();
	}
	
	/**
	 * Returns the prefix.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getPrefix--
	 * @returns {string}
	 */
	get prefix() {
		return this.zzzNode.prefix();
	}
	
	/**
	 * Gets the text context of this node and its descendants.
	 * See https://docs.oracle.com/javase/8/docs/api/org/w3c/dom/Node.html#getTextContent--
	 * @returns {string}
	 */
	get textContent() {
		return this.zzzNode.textContent();
	}
	
	/**
	 * Gets the first result of an XPath expression starting with this node, or null.
	 * Attribute values are returned as plain strings.
	 * @param {string} xpath  the XPath expression
	 * @returns {XMLNode|string}
	 */
	xpathNode(xpath) {
		let nodes = this.xpathNodes(xpath);
		return nodes.length > 0 ? nodes[0] : null;
	}
	
	/**
	 * Gets all results of an XPath expression starting with this node.
	 * Attribute values are returned as plain strings.
	 * @param {string} xpath  the XPath expression
	 * @returns {XMLNode|string[]}
	 */
	xpathNodes(xpath) {
		let nodes = this.zzzNode.xpath(xpath);
		let array = [];
		for(let i = 0; i < nodes.length; i++) {
			array.push(typeof nodes[i] == 'string' ? nodes[i] : new XMLNode(nodes[i]));
		}
		return array;
	}	
}
Object.defineProperty(XMLNode.prototype, 'childNodes', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'localName', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'namespaceURI', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'nodeName', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'nodeValue', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'prefix', {enumerable: true});
Object.defineProperty(XMLNode.prototype, 'textContent', {enumerable: true});
