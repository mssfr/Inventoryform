import React from "react";
import Master from "./masterfom";



class Inventory extends React.Component{
    

    render(){
        return(
            <div className="app">
                <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                </head>
                <div class="head">
                <img src="D:/inventoryform/image/logo.png" width="30px"></img>
                <span>Inventory Management System</span>
                </div>
                <div id="sidebar">
                <div id="leftmenu">
                    <div id="leftpanel" >
                    <div id="inventoryleft"><ul>
                        <div id="root1">Inventory</div>
                        <div class="left-inventory">
                            <a >Material Inventory</a>
                            <a  >KIT Inventory</a>
                            <a >Purchase Order</a>
                            <a >Receive Material</a>
                        </div></ul>
                    </div> 
                    <div id="Kits">
                        <ul>
                        <div id="root1">KITS</div>
                        <div>
                            <a>KIT Production</a>
                            <a>KIT Scanout</a>
                        </div>
                        </ul>
                    </div>
                    <div id="master">
                        <ul>
                        <div id="root1">Master</div>
                        <div>
                            <a>Vendor Master</a>
                            <a>KIT master</a>
                            <a href="#invetorycatogory">Inventory Mastor</a>
                            <a>Location&Storage</a>
                        </div>
                        </ul>
                    </div>
                    <div id="settings">
                        <ul>
                        <div id="root1">Settings</div>
                        <div>
                            <a id="invetorycatogory" >Inventory Category</a>
                            <a>Barcode Configuration</a>
                            <a>Barcode Printer settings</a>
                        </div>
                        </ul>

                    </div>
                    </div>
                </div>
                </div>
                <div id="rightpanel">
                <div id="right0">
                    <Master/>
                </div>
                </div>
            </div>

        )
    }
}
export default Inventory;