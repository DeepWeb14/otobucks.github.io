
import React from 'react'

function Contact() {


  return (
    <>

      <section>
        <div className="container-fluid contact_img">
        </div>
      </section>


      {/* <!-- ==contact== --> */}

      <section className="contact my-5">
        <div className="container">
          <div className="row">
            
          <div className="col-lg-6 mt-4 contect-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977"></iframe>
            </div>
            <div className="col-lg-6 mt-3">
              <form>
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Message" />
                <button className="btn-web mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
