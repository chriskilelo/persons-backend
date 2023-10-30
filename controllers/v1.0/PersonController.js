/**
 * TO GOD BE ALL THE GLORY
 * 29-OCT-2023
 * This controller will handle Persons related activities
 */

/**
 * @desc    Retrieve all the persons saved in the database.
 * @route   GET /api_v1.0/persons
 * @access  Private
 */
const fetchAllPersons = (req, res) => {
    console.log("JESUS IS LORD")
}

/**
 * @desc    Retrieve a single person's record saved in the database.
 * @route   GET /api_v1.0/persons
 * @access  Private
 */
const fetchPerson = (req, res) => {
    console.log("GET Single Person")
}

/**
 * @desc    Insert a new person into the database
 * @route   POST /api_v1.0/persons
 * @access  Private
 */
const setPerson = (req, res) => {
console.log("SET Person");
}

/**
 * @desc    Update a person whose ID has been specified
 * @route   PUT /api_v1.0/persons/:id
 * @access  Private
 */
const updatePerson = (req, res) => {
console.log("UPDATE Person");
}

/**
 * @desc    Delete the person whose ID has been specified
 * @route   DELETE /api_v1.0/persons/:id
 * @access  Private
 */
const deletePerson = (req, res) => {
   console.log("DELETE Person");
}

module.exports = {
    fetchAllPersons,
    fetchPerson,
    setPerson,
    updatePerson,
    deletePerson
}