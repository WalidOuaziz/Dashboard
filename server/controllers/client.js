import Product from "../models/Products.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import getCountryIso3 from 'country-iso-2-to-3';


export const getProducts = async(req, res) => {
    try {
       const products = await Product.find();
    //    get All stat data from database (ProductStat) using productId (Foreing Key)
       const productsWithStat = await Promise.all(
         products.map(async(product) => {
            const stat = await ProductStat.find({
                productId : product._id
            })
            return {
                ...product._doc,
                stat
             }
         })
       )

       res.status(200).json(productsWithStat);

    } catch (error) {
        res.status(404).json({message : error.message})
    }
}




export const getCustomers = async(req, res) => {
    try {
      const customers = await User.find({role: "user"}).select('-password');
      res.status(200).json(customers);

    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


export const getTransaction = async(req , res)=> {
    try {
        //sort should look like this : {"field", "userId","sort", "desc"}
        // const { page = 1, pageSize= 20 , sort= null , search ="" } = req.query;

        // // formated sort should look like { userId : -1 }
        // const generateSort = () => {
        //     const sortParsed = JSON.parse(sort);
        //     const sortFormated = {
        //         [sortParsed.field] : (sortParsed.sort = "asc" ? 1 : -1),
        //         // example ["userId"] = 1 ||-1 ;
        //     };

        //     return sortFormated ;
        // };

        // const sortFormated = Boolean(sort) ? generateSort() : {} ;

        const transaction = await Transaction.find();
        const total = await Transaction.countDocuments();

        res.status(200).json({
            transaction,
            total
        });

    } catch (error) {
        res.status(404).json({message : error.message})
    }
}



export const getGeography = async(req , res)=> {
    try {
        const users = await User.find()
        const mappedLocation = users.reduce((acc, { country }) => {
            const countryISO3 = getCountryIso3(country)
            if(!acc[countryISO3]) {
                acc[countryISO3]= 0 ;
            }
            acc[countryISO3]++
            return acc ;
        }, {});

        const formatedLocations = Object.entries(mappedLocation).map(
            ([country, count]) => {
                return { id: country , value: count }
            })

        res.status(200).json(formatedLocations);

    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


