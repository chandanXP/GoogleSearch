import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faTh } from '@fortawesome/free-solid-svg-icons';
import Avatar from "@material-ui/core/Avatar";





import googleSearch2 from "./images/googleSearch2.png";
import msTeams from "./images/msTeams.png";
import youtube from "./images/youtube.png";
import drive from "./images/googleDrive.png";
import Maps from "./images/googleMaps.png";
import googlePhotos from "./images/googlePhotos.png";
import spotify from "./images/spotify.png";
import gmail from "./images/gmail.png";
import facebook from "./images/facebook.png";
import zoom from "./images/zoom.png";
import instagram from "./images/instagram.png";
import userIcon from"./images/userIcon.png";
import translate from"./images/googleTranslate.png";
import sheets from"./images/googleSheet.png";
import podcast from"./images/googlePodcast.png";
import hangout from"./images/googleHangout.png";
import earth from"./images/googleEarth.png";
import duo from"./images/googleDuo.png";
import calender from"./images/googleCalender.png";
import ads from"./images/googleAds.png";

 


function App() {
  function funcDropDown(){
    document.getElementById('down').style.cssText = 'display: block;';
    document.getElementById('open').style.cssText = 'display: none;';
    document.getElementById('close').style.cssText = 'display: block;';

  }
  function funcClose(){
    document.getElementById('down').style.cssText = 'display: none;';
    document.getElementById('close').style.cssText = 'display: none;';
    document.getElementById('open').style.cssText = 'display: block;';


  }
  return (
    <>
      <div className="Googlesearch">

        <div className="Nav">
          
          <div className="NavMenu">
            <div className="menuCell">
              <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
            </div>
            <div className="menuCell">
              <a href="https://www.google.co.in/imghp?hl=en&tab=ri&authuser=0&ogbl">Images</a>
            </div>
            <div className="menuCell">
              <button onClick={funcClose} id="close"><FontAwesomeIcon icon={faTh} className="closeButton"/></button>
              <button onClick={funcDropDown} id="open"><FontAwesomeIcon icon={faTh} className="menuButton"/></button>
            </div>
            {/* <div className="menuCell">
              <Avatar
                className="userIcon"
                src={userIcon}
                alt="UserIcon"
              />
            </div> */}
             
          </div>
           
        </div>

        <div className="AppModal"  id="down">
          <div className="AppGrid">

            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={gmail}
                  alt="Gmail"
                />
                <p>Gmail</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={youtube}
                  alt="youtube"
                />
                <p>Youtube</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={drive}
                  alt="drive"
                />
                <p>Drive</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={Maps}
                  alt="Maps"
                />
                <p>Maps</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={googlePhotos}
                  alt="googlePhotos"
                />
                <p>Photos</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={translate}
                  alt="translate"
                />
                <p>Translate</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={sheets}
                  alt="sheets"
                />
                <p>Sheets</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={podcast}
                  alt="podcast"
                />
                <p>Podcast</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={hangout}
                  alt="hangout"
                />
                <p>Hangout</p>
              </a>
            </div>

            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={earth}
                  alt="earth"
                />
                <p>Earth</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={duo}
                  alt="duo"
                />
                <p>Duo</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={calender}
                  alt="calender"
                />
                <p>Calender</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={hangout}
                  alt="hangout"
                />
                <p>Hangout</p>
              </a>
            </div>
            <div className="modalcell">
              <a>
                <Avatar
                  className="modalAppLogo"
                  src={ads}
                  alt="ads"
                />
                <p>Ads</p>
              </a>
            </div>

          </div>
        </div>

        <div className="Body">
          <div className="Banner">
            <img className="BannerLogo" alt="googleSearch" src={googleSearch2}/> 

          </div>

          <div className="Layout">
            <p><FontAwesomeIcon icon={faSearch} className="SearchIcon"/></p>
            <input className="searchInput" 
              placeholder="Search Google or type URL"
            />
            <p><FontAwesomeIcon icon={faMicrophone} className="MicrophoneIcon"/></p>
          </div>

          <div className="Recent">
            <div class="wrapper">
              <div class="cell">
                <a href="https://www.microsoft.com/en-ww/microsoft-teams/log-in">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={msTeams}
                      alt="Teams"
                    />
                  </div>
                  <p>Teams</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://www.youtube.com/">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={youtube}
                      alt="youtube"
                    />
                  </div>
                  <p>Youtube</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://drive.google.com/drive/u/0/">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={drive}
                      alt="Drive"
                    />
                  </div>
                  <p>Drive</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://www.google.com/maps">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={Maps}
                      alt="Maps"
                    />
                  </div>
                  <p>Maps</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://www.google.com/photos/about/">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={googlePhotos}
                      alt="Photos"
                    />
                  </div>
                  <p>Photos</p>
                </a>
              </div>

              <div class="cell">
                <a href="https://accounts.spotify.com/en/login?continue=https">
                  <div> 
                    <Avatar
                      className="recentAppLogo"
                      src={spotify}
                      alt="Spotify"
                    /> 
                  </div>
                  <p>Spotify</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={gmail}
                      alt="Gmail"
                    />
                  </div>
                  <p>Gmail</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://www.facebook.com/?stype=lo&jlou=AfdgCKZjXCuKNcL_qbqWV0oZiiqzunB5bBTFuM9f3HxQiYBN91lFKE04EjVECcQ2T9vcrn0mZ8l6-1NFmoScumcToYb5wP52B0Zb7TLniBG2Cw&smuh=50941&lh=Ac-LjSOqN-7Nci8UHeo">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={facebook}
                      alt="Facebook"
                    />
                  </div>
                  <p>Facebook</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://zoom.us/signin">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={zoom}
                      alt="Zoom"
                    />
                  </div>
                  <p>Zoom</p>
                </a>
              </div>
              <div class="cell">
                <a href="https://www.instagram.com/accounts/login/?next=/direct/t/340282366841710300949128134367883472030/">
                  <div>
                    <Avatar
                      className="recentAppLogo"
                      src={instagram}
                      alt="Instagram"
                    />
                  </div>
                  <p>Instagram</p>
                </a>
              </div>
               

            </div>
            
          </div>
        </div>

      </div>
    </>
    
  );
}

export default App;

 