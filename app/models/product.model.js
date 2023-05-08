module.exports = mongoose => {
    var proSchema = mongoose.Schema(
      {
        name: String,
        age: String,
      },
      { timestamps: true }
    );
  
    proSchema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const product = mongoose.model("product", proSchema);
    return product;
  };


  