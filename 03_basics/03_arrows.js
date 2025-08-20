const user={
    name:"Jaideep",
    price:4323,
    welcomeMessg:function(){
        console.log(`${this.name}, welcome aaiye`);
        
    }
}
user.welcomeMessg();
user.name="Sahil"
user.welcomeMessg();