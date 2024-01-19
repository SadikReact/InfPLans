import React, { useState, useEffect } from "react";
import "../../assets/scss/hopTravelAssist.scss";
import LayoutOne from "../../layouts/LayoutOne";
import hopImg from "../../assets/imgs/hopImg.png";
const HopTravelAssist = () => {
  useEffect(() => {
    console.log(hopImg);
  }, []);

  return (
    <LayoutOne>
      <section
        class="hot-travel-bg"
        alt="Find the righ  t coverage for your trip"
        id="hot-travel-bg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              <h1 className="text-center heading">HOP TRAVEL ASSIST PLANS</h1>
              <p className="text-white text-center hero-text">
                Hop! Travel Assist is a travel assistance membership program for
                international trips, offering 100% payment for Medical and
                Travel Assistance to the listed maximum in the membership
                general conditions. Hop! Travel Assistance offers guaranteed
                cashless claims via Hop! Assist.NOTE: This is a travel
                assistance product, and not an insurance product.
              </p>

              <button>Get a Quote and Apply</button>
            </div>
          </div>
        </div>
      </section>
      <section className=" container text-center">
        <h2 className="text-blue my-4 hophead">What is Hop! Travel Assist?</h2>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <p>
                    Hop! Travel Assist is an innovative approach to solving
                    travelers' needs while they are visiting a new country. Hop!
                    provides medical assistance for travelers, ensuring peace of
                    mind while on the road. Hop! has benefits for cruise, trip
                    cancellation, pre-existing conditions, and much more!
                  </p>
                  <p>
                    NOTE: Hop! requires members to contact Hop Assist within
                    certain times to access benefits. Non-Life-Threatening
                    Medical Assistance requires notification within 7 days of
                    the first symptom. Life-threatening Medical Assistance needs
                    to be reported within 48 hours of the first symptom. Travel
                    Assistance requires notification within 24 hours of the
                    incident.
                  </p>
                  <p>
                    One of the unique features of Hop! Travel Assist is the
                    guaranteed cashless claims process. This means that if a
                    member uses Hop! assistance services, they don't have to
                    worry about paying out of pocket for medical expenses.
                    Instead, Hop! takes care of everything for them, making it
                    incredibly easy and stress-free to use the program.
                  </p>
                  <p>
                    When a member needs medical assistance while traveling, they
                    can simply call Hop! Travel Assist to start the process.
                    Hop! will then make all the necessary appointments for the
                    member, including appointments with doctors, hospitals, and
                    other healthcare providers. This eliminates the hassle and
                    stress of trying to find medical care in an unfamiliar
                    location.
                  </p>
                  <p>
                    Once the member receives the necessary medical care, Hop!
                    will take care of the payment process for them. They will
                    work directly with the healthcare provider to ensure that
                    the member doesn't have to pay anything out of pocket. This
                    means that the member can focus on their recovery without
                    having to worry about the financial aspect of their medical
                    care.
                  </p>
                  <p>
                    Hop! also offers assistance for prescription drugs, dental
                    emergencies, medical evacuation, and repatriation of
                    remains. In case of an accidental death, Hop! provides
                    coverage for that as well. If a traveler is required to
                    quarantine due to COVID-19, Hop! will cover hotel expenses
                    during that time.
                  </p>
                  <p>
                    For travelers who need to be evacuated, Hop! offers air
                    ambulance services as an optional add-on. Medical clearances
                    and fit-to-fly assessments are also available. Hop! also
                    provides referrals for physicians, hospitals, dental care,
                    and vision care, ensuring travelers have access to quality
                    healthcare no matter where they are.
                  </p>
                  <p>
                    In case of trip interruptions or cancellations, Hop!
                    provides assistance for certain events, such as the death or
                    critical illness of an immediate family member or a serious
                    disaster at home. If flights are delayed or cancelled, Hop!
                    provides for the cost of rebooking. Lost or delayed baggage,
                    lost passports or travel documents, and emergency cash
                    transfers are all covered as well.
                  </p>
                  <p>
                    The travel assist program also offers security assistance
                    while traveling outside of one's home country. Assistance is
                    provided in cases of mass public disturbances, violent
                    terrorist or extremist incidents, and major disasters. There
                    is a 24/7 point of contact to report emergencies and get
                    security and safety advice from duty managers. Optional
                    add-ons include emergency political and security
                    evacuations, hijacking, and kidnap for ransom.
                  </p>
                  <a href="javascript:void(0)" class="read-less text-blue">
                    READ LESS
                  </a>
                </div>
                <div className="col-4">
                  <img className="hopIMG" src={hopImg} alt="hop Plan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutOne>
  );
};

export default HopTravelAssist;
