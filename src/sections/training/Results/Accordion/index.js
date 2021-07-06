import { Tabs, Tab, Input, Label, TabContent, HR } from './AccordionStyles';

export const Accordion = () => {
  return (
    <Tabs className='tabs'>
      <Tab className='tab'>
        <Input id='rd1' type='radio' name='rd' className='accordion-i' />
        <Label htmlFor='rd1' className='tab-label'>
          We find your partner
        </Label>
        <TabContent className='tab-content'>
          Bushwick pickled neutra waistcoat tacos cred. Single-origin coffee
          subway tile marfa scenester cardigan. Activated charcoal freegan plaid
          craft beer chillwave polaroid, seitan chambray shabby chic vaporware
          succulents.
        </TabContent>
      </Tab>
      <HR />
      <Tab className='tab'>
        <Input id='rd2' type='radio' name='rd' className='accordion-i' />
        <Label htmlFor='rd2' className='tab-label'>
          We make your plan.
        </Label>
        <TabContent className='tab-content'>
          Pinterest deep v DIY prism, cold-pressed lumbersexual YOLO disrupt
          venmo taxidermy iPhone PBR&B vinyl edison bulb fam. Pabst enamel pin
          fanny pack slow-carb austin, pickled blog pug leggings pour-over.
          Copper mug succulents neutra fixie.
        </TabContent>
      </Tab>
      <HR />
      <Tab className='tab'>
        <Input id='rd3' type='radio' name='rd' className='accordion-i' />
        <Label htmlFor='rd3' className='tab-label'>
          We start the work.
        </Label>
        <TabContent className='tab-content'>
          Kale chips vinyl subway tile, PBR&B mlkshk woke health goth. Coloring
          book plaid roof party neutra, austin PBR&B locavore chicharrones
          humblebrag lyft cred. Butcher gochujang lumbersexual man bun
          microdosing. PBR&B la croix yuccie, banjo shabby chic hammock fixie
          tumblr cronut stumptown mixtape pok pok.
        </TabContent>
      </Tab>
      <HR />
      <Tab className='tab'>
        <Input id='rd4' type='radio' name='rd' className='accordion-i' />
        <Label htmlFor='rd4' className='tab-label'>
          Take our training anywhere
        </Label>
        <TabContent className='tab-content'>
          Polaroid jianbing slow-carb banjo, jean shorts lumbersexual migas swag
          90's dreamcatcher put a bird on it. Unicorn vape forage, chartreuse
          irony pug beard. Tilde synth everyday carry, single-origin coffee
          leggings before they sold out cold-pressed polaroid freegan chambray
          letterpress jean shorts poutine. Aesthetic mixtape vape, brunch raw.
        </TabContent>
      </Tab>
    </Tabs>
  );
};
