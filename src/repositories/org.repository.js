import Org from "../models/Org.model";

class OrgRepository {
  constructor(model) {
    if (!OrgRepository.instance) {
      this.model = model;
      OrgRepository.instance = this;
    }
    return OrgRepository.instance;
  }

  async create(doc, session) {
    return await this.model.create(doc, { session });
  }

  async createMany(doc, session) {
    return await this.model.insertMany(doc, { session });
  }

  async read(filter, options) {
    const [docs, count] = await Promise.all([
      this.model.find(filter, {}, options),
      this.model.countDocuments(filter),
    ]);
    return { docs, count };
  }

  async update(filter, doc, options) {
    return await this.model.findOneAndUpdate(filter, doc, options);
  }

  async updateMany(filter, doc, options) {
    return await this.model.updateMany(filter, doc, options);
  }

  async deleteMany(filter, options) {
    return await this.model.deleteMany(filter, options);
  }

  async aggregate(filter, pipeline) {
    const [docs, count] = await Promise.all([
      this.model.aggregate(pipeline),
      this.model.countDocuments(filter),
    ]);
    return { docs, count };
  }
}

const instance = new OrgRepository(Org);
Object.freeze(instance);

export default instance;


// instance.readOrgs({}).then(console.log).catch(console.error);