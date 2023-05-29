const cds = require("@sap/cds");

module.exports = async (srv) => {
  srv.on("READ", "Customer", async (req, next) => {
    const tx = cds.transaction(req);
    const search = req._query.$search;
    const { Customer } = cds.entities;
    let query = SELECT.from(Customer);
    search.split(" ").forEach((exp, index) => {
      if (index === 0) {
        query = query.where(`LOWER(fullName) LIKE`, `%${exp.toLowerCase()}%`);
      } else {
        query.and(`LOWER(fullName) LIKE`, `%${exp.toLowerCase()}%`);
      }
    });

    const q = tx.run(query);

    return q;
  });
};
