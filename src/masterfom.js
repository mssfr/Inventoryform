import React from 'react';


class Master extends React.Component{

    render()
    {
        return(
            <div id="rightPanel">
                <div id="head1">
                    <div id="headerright"> 
                        <span>Inventory Master List</span>
                        <button id="nv">New Inventory</button>
                    </div>
                </div>
                <div>
                    <div id="inputform">
                        <div id="tags">
                            <label>Inventory ID</label><br/>
                            <input type="text"/><br/><br/>
                        </div>`
                        <div id="tags">
                            <label>Inventory Category</label><br/>
                            <select name="" id="" form="">
                                <option selected disabled value="">Choose...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select><br/>
                        </div>
                            <div id="tags">
                                <label>Unit Type</label><br/>
                                <select name="" id="" form="">
                                    <option selected disabled value="">Choose...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select><br/>
                            </div>
                            <div  id="tags">
                                <label>Inventory Name</label><br/>
                                <input type="text"/><br/>
                            </div>
                            <div id="tags">
                                <label>Vendors</label>
                                <select name="" id="" form="">
                                    <option selected disabled value="">Choose...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div id="tag">
                                <button type ="button">Search</button>
                                <button type ="button">Reset</button>
                            </div>
                    </div>  
                 </div> 
                
                    <table id="resposive-tble">
                        <div class="container">
                        <ul class="responsive-table">
                            <li class="table-header">
                            <div class="col col-1">Inventory ID</div>
                            <div class="col col-2">Inventory Name</div>
                            <div class="col col-3">Inventory Category</div>
                            <div class="col col-4">Unit Type</div>
                            <div class="col col-5">Status</div>
                            </li>
                            <li class="table-row">
                            <div class="col col-1" ></div>
                            <div class="col col-2" > </div>
                            <div class="col col-3" ></div>
                            <div class="col col-4" ></div>
                            <div class="col col-5"></div>
                            </li>
                            <li class="table-row">
                            <div class="col col-1" ></div>
                            <div class="col col-2" > </div>
                            <div class="col col-3" ></div>
                            <div class="col col-4" ></div>
                            <div class="col col-5"></div>
                            </li>
                            <li class="table-row">
                            <div class="col col-1" ></div>
                            <div class="col col-2" > </div>
                            <div class="col col-3" ></div>
                            <div class="col col-4" ></div>
                            <div class="col col-5"></div>
                            </li>
                            <li class="table-row">
                            <div class="col col-1" ></div>
                            <div class="col col-2" > </div>
                            <div class="col col-3" ></div>
                            <div class="col col-4" ></div>
                            <div class="col col-5"></div>
                            </li>
                        </ul>
                        </div>
                    </table>
                 <div id= "pages"> 
                 <button>1</button>
                 <button>2</button>
                 <button>3</button>
                 </div>
            </div>
        )
    }
}
export default Master;