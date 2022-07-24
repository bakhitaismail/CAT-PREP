class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendor = [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let target = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(target);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let targetFarm = this.farms.find(item => item.farmId ===farmId)
    targetFarm.farmId =newFarmId;
    targetFarm.farmName =newFarmName;
    targetFarm.farmer =newFarmerName;
    targetFarm.phone =newPhone;
    targetFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let target = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(target);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let targetProduct = this.product.find(item => item.productId ===productId)
    targetProduct.productId =newProductId;
    targetProduct.productName = newProductName;
    targetProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let targetProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${targetProduct.productName} for KES ${quantity*targetProduct.price}`);
    }
    }
    }
    
    let firstfarm = new Mkulima();
    firstfarm.addFarm("032","Bakhita","Ismail","0711476132", "C 032");
    firstfarm.addFarm("001","Aisha","Iddi","0700892520", "C 001");
    firstfarm.addFarm("047","Fardosa","Abdi","0110615151", "C 047");
    console.log(firstfarm.farms);
    
    firstfarm.removeFarm("001");
    console.log()