import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { H3, Div, UL, LI } from '../CoreStyles';

export default (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <Div className='keen-slider__slide'>
            <H3>F: Focus</H3>
            <UL>
              <LI>
                Envision your dream, ideal self. Believe that you can become
                that.
              </LI>
              <LI>
                Set personal goals that will help you reach your newfound focus.
              </LI>
              <LI>
                Remove distractions. Do not let anyone or anything distract you
                from your goals and dreams.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>U: Unity</H3>
            <UL>
              <LI>
                Chambray austin lumbersexual, chia hell of scenester skateboard
                synth iceland ennui.
              </LI>
              <LI>
                Hammock offal whatever hot chicken crucifix, vaporware marfa
                banh mi.
              </LI>
              <LI>
                Woke crucifix occupy banh mi pop-up man braid tacos yr polaroid
                godard.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>N: Nobility</H3>
            <UL>
              <LI>Flexitarian aesthetic vinyl plaid keffiyeh knausgaard.</LI>
              <LI>Fashion axe cardigan ethical keytar vexillologist.</LI>
              <LI>
                Pug hell of wolf, succulents readymade seitan pitchfork mlkshk
                ugh blog food truck.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>C: Compassion</H3>
            <UL>
              <LI>
                Distillery twee stumptown aesthetic, gastropub sriracha deep v
                pork belly wolf subway tile hella keytar salvia yuccie.
              </LI>
              <LI>
                Poutine chambray photo booth, fanny pack yr la croix hammock.
              </LI>
              <LI>
                Godard kombucha fixie shoreditch austin retro. Shoreditch
                unicorn sustainable vexillologist iceland occupy iPhone keytar
                man bun.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>T: Tenacity</H3>
            <UL>
              <LI>
                Hella vape tilde, schlitz jianbing freegan kitsch cred biodiesel
                viral raclette man bun cronut selvage.
              </LI>
              <LI>Kitsch small batch palo santo humblebrag.</LI>
              <LI>
                Retro fixie knausgaard gluten-free. Lumbersexual gluten-free
                chambray woke hell of mixtape cred keffiyeh.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>I: Innovation</H3>
            <UL>
              <LI>
                Forage vexillologist paleo, irony you probably haven't heard of
                them prism tote bag.
              </LI>
              <LI>Keytar asymmetrical tacos locavore pickled fingerstache.</LI>
              <LI>
                Kale chips neutra humblebrag selvage retro hoodie. Direct trade
                small batch woke messenger bag offal typewriter pour-over, tbh
                photo booth scenester.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>O: Optimisim</H3>
            <UL>
              <LI>
                Drinking vinegar squid offal affogato, flannel master cleanse
                raw denim bicycle rights meh disrupt dreamcatcher 8-bit.
              </LI>
              <LI>
                Whatever cred actually 8-bit pour-over affogato pok pok.
                Actually gentrify glossier pitchfork gastropub.
              </LI>
              <LI>
                Dreamcatcher knausgaard vinyl, palo santo tacos PBR&B pug
                brooklyn raclette.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>N: Nobility</H3>
            <UL>
              <LI>
                Heirloom sartorial iceland wayfarers twee 90's 8-bit meggings
                stumptown literally.
              </LI>
              <LI>
                Shabby chic offal kinfolk banjo DIY. Gochujang shaman man braid
                godard wayfarers flexitarian lyft aesthetic hot chicken fixie.
              </LI>
              <LI>IPhone gluten-free enamel pin hammock bicycle rights.</LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>A: Agility</H3>
            <UL>
              <LI>
                Health goth +1 cliche hot chicken post-ironic normcore PBR&B
                crucifix vexillologist waistcoat.
              </LI>
              <LI>
                Tote bag cronut sustainable meditation gochujang deep v tbh
                trust fund.
              </LI>
              <LI>
                Poutine tilde mixtape keffiyeh. Yr palo santo shabby chic health
                goth plaid thundercats keffiyeh lomo raw denim af heirloom.
              </LI>
            </UL>
          </Div>
          <Div className='keen-slider__slide'>
            <H3>L: Love</H3>
            <UL>
              <LI>
                I'm baby helvetica raw denim whatever next level yr glossier
                wolf celiac.
              </LI>
              <LI>
                VHS humblebrag lo-fi, hella tote bag edison bulb bushwick.
                Dreamcatcher fam mlkshk copper mug kinfolk.
              </LI>
              <LI>
                Fixie lo-fi paleo quinoa. Organic four dollar toast mixtape vape
                meggings, tousled pug listicle gentrify banjo pour-over
                scenester.
              </LI>
            </UL>
          </Div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className='dots'>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  );
}
