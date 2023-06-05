"use strict";var w=Object.create;var b=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty;var U=(s,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of q(t))!O.call(s,n)&&n!==e&&b(s,n,{get:()=>t[n],enumerable:!(o=x(t,n))||o.enumerable});return s};var g=(s,t,e)=>(e=s!=null?w(v(s)):{},U(t||!s||!s.__esModule?b(e,"default",{value:s,enumerable:!0}):e,s));var c=(s,t,e)=>new Promise((o,n)=>{var f=i=>{try{r(e.next(i))}catch(m){n(m)}},a=i=>{try{r(e.throw(i))}catch(m){n(m)}},r=i=>i.done?o(i.value):Promise.resolve(i.value).then(f,a);r((e=e.apply(s,t)).next())});var y=g(require("express"));var R=g(require("express"));var u=g(require("mongoose")),j=new u.default.Schema({title:{type:String,required:!0,min:4},description:{type:String,required:!0,min:6},image:{type:String,default:""}},{timestamps:!0}),D=u.default.model("blog",j),d=D;var l=R.default.Router();l.get("/blogs",(s,t)=>c(void 0,null,function*(){try{let e=yield d.find({});t.status(200).send(e)}catch(e){t.status(500).send(e)}}));l.patch("/blog/:id",(s,t)=>c(void 0,null,function*(){let e=Object.keys(s.body),o=s.params.id,n=["title","description","image"];if(!e.every(a=>n.includes(a)))return t.status(404).send({message:"Invalid Updates"});try{let a=yield d.findById(o);if(!a)return t.status(404).send({message:"Blog doesnt exist"});e.forEach(r=>a[r]=s.body[r]),yield a.save(),t.status(200).send(a)}catch(a){t.status(500).send(a)}}));l.delete("/blog/:id",(s,t)=>c(void 0,null,function*(){let e=s.params.id;try{let o=yield d.findByIdAndDelete(e);t.status(200).send(o)}catch(o){t.status(500).send(o)}}));l.post("/blog",(s,t)=>c(void 0,null,function*(){try{let e=new d(s.body);yield e.save(),t.status(201).send(e)}catch(e){t.status(500).send(e)}}));l.get("/blog/:id",(s,t)=>c(void 0,null,function*(){let e=s.params.id;try{let o=yield d.findById(e);t.status(200).send(o)}catch(o){t.status(404).send(o)}}));var h=l;var B=g(require("mongoose")),V=B.default;V.connect(process.env.MONGODB_URL);var S=g(require("cors")),p=(0,y.default)();p.use((0,S.default)({origin:!0}));p.use(y.default.json());p.use(h);var I=process.env.PORT||5e3;p.listen(I,()=>{console.log("listening on port "+I)});
