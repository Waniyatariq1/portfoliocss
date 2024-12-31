import  "../style/education.css"
function Education (){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p>Trusted By Professional Quality And Servicers Our Clients From Industries Trust Us To Deliver Top-Notch Quality And Results.Here&apos;s What They To Say About Our Work.</p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Ziaudding University</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                <h1>Bachelor Of Science In Software Engineering </h1>
                <p>I Am Studing In software Engineering from Ziauddind University </p>
                </div>
            </div>

            {/* box 2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">ZiaUddind University</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                <h1>Certified Of Web Training </h1>
                <p>At The Governor IT Initiativesquo;Students Explore AIsquo;Metaversesquo;And Blockchain Technologies In An Accesible  Manner.This Program Is An Excellent Opportunity For Those Interest In These Innovative Fields.</p>
                </div>
            </div>
             {/* box 3 */}
             <div className="box-con-edu">
                <div>
                    <h1 className="uni-name">Ziauddin University</h1>
                    <span>Completed</span>
                </div>
                <div className="computer">
                <h1>Web Development </h1>
                <p>At Smitsquo;Students Gain Knowledge In Web Developmentsquo;Digital Marketingsquo;And Freelancing From Exceptional Teachers.They Offer Valuable Mentorship,Eqipping Students With Practical Skills Essential For Career Success.</p>
                </div>
            </div>
        </main>
    )
}
export default Education