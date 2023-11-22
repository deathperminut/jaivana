import axios from "axios";
import { environment } from "../Router/environments/environments";

const getProducts=async(data)=>{
    
    /* PRODUCTS */
    let path=environment.api+environment.productos

    /* BODY */

    let body={
        "nit_del_cliente": "3024201920",
        "departamento": "",
        "ciiu": "",
        "seccion":"",
        "producto_1": "",
        "producto_2": "",
        "producto_3": "",
        "producto_4": "",
        "producto_5": "",
        "producto_6": "",
        "producto_7": "",
        "producto_8": "",
        "producto_9": "",
        "producto_10":"",
        "producto_11": "",
        "producto_12": "",
        "producto_13": "",
        "producto_14": "",
        "producto_15": ""
    }
    for (var i; i<data.products.length;i++){
        let string = 'producto_'+(i+1).toString()
        body[string] = data.products[i];
    }

    console.log("LO QUE SE ENVIA: ",body);

    return await axios.post(path,body)

}


const getPrice=async(d,data,type)=>{
    
    /* PRODUCTS */
    let path=environment.api+environment.precios

    /* BODY */
    // un producto
    let body;
    if (type =='product'){
        body={
            'Codigo_Tornillo':data.code,
            'Descuento':data.descuento == '' || data.descuento == "" ? null : data.descuento,
            'Pareto' : d.pareto,
            'Nit' : data.nit,
            'Umbral_Iteracciones': data.umbral,
        }
    }else{
        body={
            'grupo':data.code_group,
            'subgrupo':data.code_Subgroup,
            'Descuento':data.descuento == '' || data.descuento == "" ? null : data.descuento,
            'Pareto' : d.pareto,
            'Nit' : data.nit,
            'Umbral_Iteracciones': data.umbral,
        }
    }
    // familia 
    
    



    return await axios.post(path,body)

}

export {getProducts,getPrice}