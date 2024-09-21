function Card() {
  return (
    <>
      <div className="profile-card w-80 bg-stone-100 rounded-lg m-auto mt-12 p-8 text-black drop-shadow">
        <div className="profile-img flex justify-center">
          <img className="h-28 rounded-full" src="profile.jpg" alt="profile" />
        </div>
        <div className="info flex flex-col">
          <div className="flex justify-center">
            <h3 className="bg-gray-300 font-bold w-24 text-center rounded-lg p-1 mt-4 mb-2">
              Founder
            </h3>
          </div>
          <h2 className="text-center text-xl font-bold">Alumin Name</h2>
          <div className="content m-3 p-2 text-center">
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
          </div>
        </div>
        <div>
          <ul className="social-media-buttons list-none flex justify-between">
            <li>
              <a href="#facebook">
                <img src="Facebook.png" alt="facebook" className="h-10 p-2" />
              </a>
            </li>
            <li>
              <a href="#instagram">
                <img src="insta.png" alt="instagram" className="h-10 p-2" />
              </a>
            </li>
            <li>
              <a href="#twitter">
                <img src="twitter.png" alt="twitter" className="h-10 p-2" />
              </a>
            </li>
            <li>
              <a href="#linkedin">
                <img src="LinkedIn.png" alt="LinkedIn" className="h-10 p-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Media Queries */}
    </>
  );
}

export default Card;
