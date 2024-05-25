import express from 'express';


const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id:1,
            name:'table wooden',
            price:200,
            image:"https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:2,
            name:'table plastic',
            price:200,
            image:"https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:3,
            name:'table fibre',
            price:200,
            image:"https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            name:'table paper',
            price:200,
            image:"https://plus.unsplash.com/premium_photo-1684445034959-b3faeb4597d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    if (req.query.search){
     const filter =  products.filter(product=>product.name.includes(req.query.search))
     res.send(filter);
     return;
    }

    setTimeout(()=>{
        res.send(products);
    },3000)
})




const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});


