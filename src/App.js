import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.menuToggle = this.menuToggle.bind(this);
  };
  menuToggle() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };
  render() {
    return [
        <>
          <a id="menu-toggle" href="#" className="btn btn-primary btn-lg toggle" onClick={this.menuToggle}><i className="fa fa-bars"></i></a>
          <div id="sidebar-wrapper" className={this.state.isToggleOn ? 'active' : 'inactive'}>
                <ul className="sidebar-nav">
                    <li>
                        <a id="menu-close" href="#" className="btn btn-default btn-lg pull-right toggle" onClick={this.menuToggle}>
                            <i className="fa fa-times"></i>
                        </a>
                    </li>
                    <li className="sidebar-brand">
                        <a href="index.html">Get Set Go Travel's</a>
                        <hr></hr>
                    </li>
                    <li>
                        <a href="#top">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#places">Places</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>,
        <>
          <div id="top" className="header">
            <div className="vert-text parallax">
              <h1 className="header-text">Travel the world</h1>
              <h3 className="header-text">
                  <em className="header-text">So we are here to guide you</em>
              </h3>
              <>
                <a href="#about" className="btn header-btn">Find Out More</a>
              </>
              <br/>
              <>
                <a href="#about"><img src="img/direction.png" className="space" alt="Direction" /></a>
              </>
            </div>
          </div>
        </>,
        <>
         <div id="about">
            <div className="light-wrapper">
                <div className="container inner">
                    <div className="row">
                        <div className="text-center">
                            <h2 className="main-title">About our company</h2>
                            <hr/>
                        </div>
                        <div className="divide50"></div>
                        <div className="col-sm-4">
                          <figure><img src="img/office.jpg" alt="" style={{width: "100%" }}/></figure>
                        </div>
                        <div className="col-sm-8">
                          <h4>Our Working Place</h4>
                          <p>Vestibulum ligut praesent commodo cursus magna, consectetur et. Cum socis natoque penatibus et magnis dis tellus parturient pharetra montes. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                        </div>
                      </div>
                      <div className="divide50"></div>
                      <div className="row">
                        <div className="col-sm-4">
                          <h4>Our Journeys</h4><hr/>
                          <p>Duis non lectus sit amet est imperdiet cursus elementum vitae eros. Etiam adipiscingmorbi vitae magna tellus.</p>
                          <div className="divide5"></div>
                          <ul className="progress-list">
                            <li>
                              <p>Asia <em>90%</em></p>
                              <div className="progress plain">
                                <div className="bar" style={{width:"90%"}}></div>
                              </div>
                            </li>
                            <li>
                              <p>Australia <em>80%</em></p>
                              <div className="progress plain">
                                <div className="bar" style={{width:"80%"}}></div>
                              </div>
                            </li>
                            <li>
                              <p>America <em>85%</em></p>
                              <div className="progress plain">
                                <div className="bar" style={{width:"85%"}}></div>
                              </div>
                            </li>
                            <li>
                              <p>Europe <em>50%</em></p>
                              <div className="progress plain">
                                <div className="bar" style={{width:"50%"}}></div>
                              </div>
                            </li>
                          </ul> 
                        </div>
                       
                        <div className="col-sm-4">
                          <h4>Why Choose Us?</h4><hr/>
                          <p>Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. </p>
                          <div className="divide10"></div>
                          <ol className="color">
                            <li>Donec ullamcorper nulla non metus auctor.</li>
                            <li>Cras justo odio, dapibus ac facilisis in egestas.</li>
                            <li>Praesent commodo cursus magna.</li>
                            <li>Curabitur blandit tempus porttitor.</li>
                            <li>Sed posuere consectetur est at lobortis.</li>
                            <li>Aenean lacinia bibendum nulla sed consectetur.</li>
                          </ol>
                        </div>
                       
                        
                        <div className="col-sm-4">
                          <h4>Our Transports</h4><hr/>
                          <div className="divide10"></div>
                          <div className="services-2">
                            <div className="icon"> <img src="img/icon-web.png" data-src="style/images/icons/icon-web.png" data-ret="style/images/icons/icon-web@2x.png" className="retina" alt="" /> </div>
                           
                            <div className="text">
                              <h5>Responsive Layout</h5>
                              <p>Etiam porta malesuada magna.</p>
                            </div>
                           
                            <div className="divide20"></div>
                            <div className="icon"> <img src="img/icon-heart.png" data-src="style/images/icons/icon-heart.png" data-ret="style/images/icons/icon-heart@2x.png" className="retina" alt="" /> </div>
                           
                            <div className="text">
                              <h5>Flat & Clean design</h5>
                              <p>Etiam porta malesuada.</p>
                            </div>
                            
                            <div className="divide20"></div>
                            <div className="icon"> <img src="img/icon-print.png" data-src="style/images/icons/icon-print.png" data-ret="style/images/icons/icon-print@2x.png" className="retina" alt="" /> </div>
                           
                            <div className="text">
                              <h5>Print Design</h5>
                              <p>Etiam porta malesuada magna.</p>
                            </div>
                            
                            
                          </div>
                         
                          
                        </div>
                       
                        
                      </div>
                     
                      
                    </div>
                   
                  </div>
                  
                </div>
      
        <div id="services" className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <h2 className="main-title">Our Services</h2>
                        <hr/>
                    </div>
                </div>
                <div className="divide50"></div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="service-item">
                            <i className="service-icon fa fa-plane"></i>
                            <h4 className="service-title">Great Transport</h4>
                            <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatum et, alias vero, reprehenderit doloremque neque dignissimos voluptas.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="service-item">
                            <i className="service-icon fa fa-usd"></i>
                            <h4 className="service-title">Not Expensive</h4>
                            <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatum et, alias vero, reprehenderit doloremque neque dignissimos voluptas.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="service-item">
                            <i className="service-icon fa fa-cutlery"></i>
                            <h4 className="service-title">Delicious Food</h4>
                            <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatum et, alias vero, reprehenderit doloremque neque dignissimos voluptas.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="service-item">
                            <i className="service-icon fa fa-camera"></i>
                            <h4 className="service-title">Best Photographer's</h4>
                            <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatum et, alias vero, reprehenderit doloremque neque dignissimos voluptas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <div className="callout">
            <div className="vert-text">
                <h1 className="main-title parallax2">Your Travellers Guide</h1>
            </div>
        </div>
     
        <div id="places" className="places">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center">
                        <h2 className="main-title">Our visited place</h2>
                        <hr/>
                    </div>
                </div>
            </div>  
            <div className="divide50"></div>  
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/paris.jpg" alt="paris" className="img-responsive center-block"/> 
                                <figcaption>
                                    <h2>Paris</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/sydney.jpg" alt="sydney" className="img-responsive center-block" />
                                <figcaption>
                                    <h2>Sydney</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                </div>
                <div className= "row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/washington.jpg" alt="washington" className="img-responsive center-block" />
                                <figcaption>
                                    <h2>Washington</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/london.jpg" alt="london" className="img-responsive center-block" />
                                <figcaption>
                                    <h2>London</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/statue_of_liberty.jpg" alt="statue_of_liberty" className="img-responsive center-block" />
                                <figcaption>
                                    <h2>U.S.A</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="grid center-block">
                            <figure className="effect-zoe">
                                <img src="img/pizza_tower.jpg" alt="pizza_tower" className="img-responsive center-block" />
                                <figcaption>
                                    <h2>Pizza Tower</h2>
                                    <p className="icon-links">
                                        <a href="#"><i className="fa fa-heart-o"></i></a>
                                        <a href="#"><i className="fa fa-eye"></i></a>
                                        <a href="#"><i className="fa fa-bookmark-o"></i></a>
                                    </p>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                                    </p>
                                </figcaption>           
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      {/*
        <div className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3>We provide online booking</h3>
                        <a href="#" className="btn booking-btn text-center" data-toggle="modal" data-target="#booking">Click for Booking !</a>
                    </div>
                </div>
            </div>
        </div>
      */}
      
        <div id="contact" className="container parallax">
            <div className="col-md-4 col-md-offset-4 text-center">
                <h2 className="main-title">Contact us</h2>
                <hr/>
                <div className="divide50"></div>
            </div>
            
            <div className="inner contact">
              
                <div className="contact-form">
                  
                    <form id="contact-us" method="post" action="#">
                      
                        <div className="col-xs-6 col-xs-12 animated" data-animation="fadeInLeft" data-animation-delay="300">
                            
                            <input type="text" name="name" id="name" required="required" className="form" placeholder="Name" />
                            
                            <input type="email" name="mail" id="mail" required="required" className="form" placeholder="Email" />
                           
                            <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Subject" />
                        </div>
                        
                        <div className="col-xs-6 col-xs-12 animated" data-animation="fadeInRight" data-animation-delay="400">
                            
                            <textarea name="message" id="message" className="form textarea"  placeholder="Message"></textarea>
                        </div>
                        
                        <div className="relative fullwidth col-xs-12">
                            
                            <button type="submit" id="submit" name="submit" className="form-btn semibold">Send Message</button> 
                        </div>
                        
                        <div className="clear"></div>
                    </form>

                    
                    <div className="mail-message-area">
                        
                        <div className="alert gray-bg mail-message not-visible-message">
                            <strong>Thank You !</strong> Your email has been delivered.
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="map">
            <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?"></iframe>
        </div>
     
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <ul className="list-inline">
                            <li>
                                <i className="fa fa-facebook"></i>
                            </li>
                            <li>
                                <i className="fa fa-twitter"></i>
                            </li>
                            <li>
                                <i className="fa fa-dribbble"></i>
                            </li>
                            <li>
                                <i className="fa fa-pinterest"></i>
                            </li>
                        </ul>
                        <hr/>
                        <p>Copyright &copy; <a href="#">Fraters Tech</a>  2020</p>
                        <div className="top-scroll">
                            <a href="#top"><i className="fa fa-arrow-circle-up scroll"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*
        <div className="modal fade" id="booking" tabindex="-1" role="dialog" aria-labelledby="booking" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Online Booking Form</h4>
                    </div>
                    <div className="modal-body">
                        <form role="form">
                            <div className="form-group">
                                <label for="emailAddress">Email address</label>
                                <input id="emailAddress" type="email" className="form-control input-lg" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input id="password" type="password" className="form-control input-lg" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="country">Which country do you want to travel?</label>
                                <select className="form-control" id="country">
                                    <option>Australia</option>
                                    <option>Bangladesh</option>
                                    <option>England</option>
                                    <option>France</option>
                                    <option>U.S.A</option>
                                </select>
                            </div>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn confirm-btn" value="Confirm" />
                    </div>
                </div>
            </div>
        </div>
        */}
        </>
    ]
  }
}

export default App;
