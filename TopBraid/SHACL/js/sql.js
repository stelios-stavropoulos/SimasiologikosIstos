/**
 * The SQL object can be used to query a relational database using Active Data Shapes.
 */
const SQL = {
	
	/**
	 * Performs an SQL query against a database (specified by a connection object) and returns the result set
	 * rows as an array of name-value pairs.
	 * @param {Object} conn - the connection descriptor
	 * @param {string} conn.url - the URL of the database server
	 * @param {string} conn.user - the name of the user
	 * @param {string} conn.password - the password
	 * @param {string} sql - the SQL query string
	 * @returns {Object[]} an array of name-value pairs
	 */
	query: (conn, sql) => {
		return __jenaData.sqlQuery(conn, sql);
	},
	
	/**
	 * Performs an SQL update against a database (specified by a connection object).
	 * @param {Object} conn - the connection descriptor
	 * @param {string} conn.url - the URL of the database server
	 * @param {string} conn.user - the name of the user
	 * @param {string} conn.password - the password
	 * @param {string} sql - the SQL update string
	 */
	update: (conn, sql) => {
		__jenaData.sqlUpdate(conn, sql);
	}
}