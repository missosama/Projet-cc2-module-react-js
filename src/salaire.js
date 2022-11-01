import mon from "./Money-Saving3.jpg";
import table from "./51223610595_ee509b3ee2_b.jpg";
import React, { useState } from 'react';
import './salaire.css';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import "./header.css";


const Salaire=()=>{
    const[purchase,setPurchase]=useState([])
    const[idSalary,setId]=useState()
    const[Cat,setCat]=useState("")
    const[Iname,setItem]=useState("")
    const[price,setPrice]=useState(0)
    const[dt,setDt]=useState("")
    const[tabpr,setPr]=useState([])
    const[tabpr1,setPr1]=useState([0,0,0,0,0,0,0,0,0])
    const[tabdate,setDate]=useState([])
    const addPurchase = () => {
        
            setPurchase(purchase => [...purchase, {idSalary,Iname,Cat,price,dt}])
            setId(idSalary=>idSalary-price)
            setPr(tabpr => [...tabpr, price])
            setDate(tabdate=>[...tabdate,dt])
            tabpr1[8]=idSalary-price;
             tabpr1[labels2.indexOf(Cat)]+=parseFloat(price);
             console.log(tabpr1)

    }
   
    const labels = tabdate;

    const data = {
    labels: labels,
    datasets: [
        {
        label: "le budget",
        backgroundColor: "green",
        borderColor: "green",
       color:"white",
        
        data: tabpr,
        },
    ],
    };
    const labels2 = ["Housing","Transporation","Food","Utilities","Insurance","Medical and health care","Clothes","Saving","Salary"];

    const data2 = {
        labels: labels2,
        datasets: [
          {
            label: "# of Votes",
            data: tabpr1,
            backgroundColor: [
              "#007D9C",
              "#244D70",
              "#D123B3",
              "#F7E018",
              "#fff",
              "#FE452A",
              "#8b4513",
              "#ffe4c4",
              "#8a2be2"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div className="budget_body">
            <div className="header">
                  <h1>My Wallet</h1>
                  <h3>best way to manage your money</h3>
                  <div>
                     <input id="salaire" name="salaire" placeholder="entrez votre salaire" value={idSalary} onChange={(e) => setId(e.target.value)} required/>
                     <button><a href="#budget">Ajouter</a></button>
                 </div>
            </div>

            <div className='budget' id="budget">
                <label>Item Name</label>
                <input type="text" id="Iname" name="Iname" value={Iname} onChange={(e) => setItem(e.target.value)} required/>
                <select id="cat" name="cat" value={Cat} onChange={(e) => setCat(e.target.value)} required>
                    <option value={"Housing"}>Housing</option>
                    <option value={"Tronsporation"}>Transporation</option>
                    <option value={"Food"}>Food</option>
                    <option value={"Utilities"}>Utilities</option>
                    <option value={"Insurance"}>Insurance</option>
                    <option value={"Medical"}>Medical and health care</option>
                    <option value={"Clothes"}>Clothes</option>
                    <option value={"Saving"}>Saving</option>
                </select>
                <label>Price</label>
                <input type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <label>Date</label>
                <input type="date" id="dt" name="dt" value={dt} onChange={(e) => setDt(e.target.value)} required/>
                <button onClick={addPurchase} className="btn"><a href="#table">Ajouter</a></button>
                   
                
            </div>

            <div className="information">
                <table id="table2">
                   <td>Item Name</td>
                   <td>Category</td>
                   <td>Price</td>
                   <td>Date</td>
                   <td>The Rest</td>
                </table>
            {purchase.map((pur,index) => <div key={index} className='purchase'> 
                    <table  id="table">
                        <td>{pur.Iname}</td>
                        <td>{pur.Cat}</td>
                        <td>{pur.price}</td>
                        <td>{pur.dt}</td>
                        <td>{pur.idSalary-pur.price}</td>
                        
                    </table>
                        
                    </div> )}
                    <div className="Line">
                    <Line data={data}  />
                    </div>
                    <div className="Pie">
                        <Pie data={data2}/>
                    </div>
                   
                     
            </div>
        </div>
    )
}
export default Salaire;