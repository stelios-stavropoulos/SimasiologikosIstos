
/**
 * An API to access common I/O operations including the ability to work with uploaded files and making HTTP requests.
 */
const IO = {

    /**
     * @typedef {Object} HttpResponse
     * @property {number} status - The HTTP status code, e.g. 200 for OK
     * @property {number} statusText - The HTTP status message, e.g. "OK"
     * @property {Object} data - The response data if present and toFile was not true. Will be parsed JSON if response mime type contains 'json' and the result can be parsed OK.
     * @property {string} file - The file ID if toFile was set to true
     * @property {Object} headers - The response headers
     */

    /**
     * Performs a HTTP request and either returns the response or writes the response into a (temporary) file that
     * can be processed separately.
     * The API is similar to Axios but waits until the request has completed.
	 * @param {Object} request - the request descriptor
     * @param {string} request.url - The URL to send the request to.
     * @param {string} [request.baseURL] - Will be prepended to url (for convenience).
     * @param {string} [request.method] - The request method such as 'post', defaulting to 'get'
     * @param {Object} [request.headers] - Name-value pairs for HTTP request headers.
     * @param {Object} [request.params] - Name-value pairs for the HTTP request parameters.
     * @param {string} [request.data] - The request body data. Only applicable for PUT, POST, DELETE and PATCH.
     * @param {string} [request.contentType] - Overrides the default content type, which is text/plain if data is specified, or application/x-www-form-urlencoded otherwise.
     * @param {string} [request.username] - The user name for HTTP Basic authentication.
	 * @param {string} [request.password] - The password to use for authentication. If left empty, and authentication is
     *                      enabled (if userName is present), then the password will be retrieved from Secure Storage.
     * @param {string} [request.securePasswordURL] - When retrieving the password from Secure Storage, get the password for
     *                      this URL instead of the password for url. Only allowed if the request URL (url) starts with
     *                      the securePasswordURL.
     * @param {string} [request.toFileSuffix] - If present, the response body will be saved as a file that can the accessed using
     *                      IO.uploadedFile().  The response JSON will include the file ID as value of the 'file' field.
     *                      The value will be used as file suffix. For example if you are downloading a TSV file, use 'tsv' so
     *                      that IO.uploadedFile(response.file).asSpreadsheet() does the right thing.
     * @returns {HttpResponse} response The HTTP response as an object
     */
    http(request) {
        let result = __jenaData.http(request);
        if(result.data && result.headers) {
            let ct = result.headers['content-type'];
            if(ct && ct.indexOf('json') > 0) {
                try {
                    let json = JSON.parse(result.data);
                    result.data = json;
                }
                catch(ex) {
                    // Ignore
                }
            }
        }
        return result;
    },

    /**
     * Produces a string in Turtle or RDF/XML serialization for a graph consisting of the provided triples.
     * @param {Triple[]} triples - An array of { subject, predicate, object } objects where each value is a NamedNode or
     *                      LiteralNode or primitive value at the object position
     * @param {string} [responseType] - Either text/turtle (default) or application/rdf+xml
     * @returns {string} the serialized triples
     */
    serializeRDF(triples, responseType) {
        return __jenaData.serializeRDF(triples, responseType);
    },
    
    /**
     * Gets an uploaded file from a provided ID.
     * @param {string} fileId  the ID of the file, typically provided as parameter value from an Action
     * @returns {UploadedFile}
     */
    uploadedFile(fileId) {
    	return new UploadedFile(fileId);
    },
}
