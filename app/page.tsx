import ExploreBtn from '@/components/ExploreBtn';
import EventCard from '@/components/EventCard';

const events = [
  {
    id: 1,
    title: 'Event 1',
    image: '/images/event1.png',
    slug: 'event-1',
    location: 'location',
    date: 'date',
    time: 'time',

  },
  {
    id: 2,
    title: 'Event 2',
    image: '/images/event2.png',
    slug: 'event-2',
    location: 'location',
    date: 'date',
    time: 'time',
  } 
  
  ]

const Home = () => {
  return (
    <section>
        <h1 className="text-center">The DevEvent Hub</h1>
        <p className="text-center mt-5">The hub for all the events in the DevEvent</p>

        <ExploreBtn />

        <div className='mt-20 space-y-7'>
            <h3>Featured Events</h3>
            <ul className='events'>
              {events.map((event) => (
                <li key={event.title}>
                  <EventCard  {...event}/>
                </li>
              ))}

            </ul>
        </div>
    </section>
  );
};

export default Home;
