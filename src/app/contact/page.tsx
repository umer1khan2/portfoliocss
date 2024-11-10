export default function contact() {

    return (


             <div id="Cwhole"> {/* //1 */}

            <div className="Ccontainer" id="Cdiv1"> {/* //2 */}
                <h1>Contact Me</h1>
            </div> {/* //2 */}

            <div className="Ccontainer" id="Cdiv2"> {/* //3 */}
                <ul>
                    <label>First Name : </label><br />
                    <input type="text" /><br />
                    <label>Last Name : </label> <br />
                    <input type="text" /><br />
                    <label>Email : </label>  <br />
                    <input type="email" /><br />
                    <label>Type your message : </label><br />  
                    <input type="text" /><br />
                    <label>Submission date </label>  <br />
                    <input type="date" /><br />

                </ul>
            </div> {/* //3 */}

            {/* //1 */} </div>

    )

}