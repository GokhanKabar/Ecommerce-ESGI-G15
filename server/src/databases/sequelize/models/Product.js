module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    concentration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    promotion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: DataTypes.STRING,
    dateAdded: DataTypes.DATE,
    dateUpdated: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    familyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: "brandId" });
    Product.belongsTo(models.Family, { foreignKey: "familyId" });
  };

  return Product;
};