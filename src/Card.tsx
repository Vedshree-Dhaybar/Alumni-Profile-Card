function Card() {
  return (
    <>
      <div className="profile-card w-80 max-sm:w-70 bg-neutral-800 rounded-lg m-auto mt-12 p-8 text-white drop-shadow">
        <div className="max-sm:flex max-sm:flex-row">
          <div>
            <div className="profile-img flex justify-center max-sm:flex max-sm:justify-start">
              <img
                className="h-24 max-sm:h-22 rounded-full"
                src="profile.jpg"
                alt="profile"
              />
            </div>
            <div className="info">
              <div className="flex justify-center max-sm:flex max-sm:justify-start max-sm:flex-row">
                <h3 className="bg-red-600 font-bold w-24 max-sm:w-20 text-center max-sm:text-max-sm rounded-lg p-1 mt-4 mb-2">
                  Role
                </h3>
              </div>
              <h2 className="text-center text-xl font-bold max-sm:text-base max-sm:font-semibold">
                Alumin Name
              </h2>
            </div>
          </div>
          <div className="max-sm:flex max-sm:flex-col">
            <div>
              <div className="content m-2 p-2 text-center max-sm:ml-5 m-0">
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum </p>
                <p>Lorem Ipsum </p>
              </div>
            </div>

            <ul className="social-media-buttons list-none flex justify-between max-sm:pt-6 max-sm:pl-2">
              <li>
                <a href="#facebook">
                  <img
                    src="Facebook.png"
                    alt="facebook"
                    className="h-10 p-2 max-sm:h-9"
                  />
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <img
                    src="insta.png"
                    alt="instagram"
                    className="h-10 p-2 max-sm:h-9"
                  />
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <img
                    src="twitter.png"
                    alt="twitter"
                    className="h-10 p-2 max-sm:h-9"
                  />
                </a>
              </li>
              <li>
                <a href="#linkedin">
                  <img
                    src="LinkedIn.png"
                    alt="LinkedIn"
                    className="h-10 p-2 max-sm:h-9"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
