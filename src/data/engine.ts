import type { EngineComponent, EngineSystem } from './types'

export const engineSystems: EngineSystem[] = [
  {
    id: 'engine-structure',
    name: 'Engine structure',
    summary: 'The solid frame that holds everything together and contains the combustion.',
  },
  {
    id: 'rotating-assembly',
    name: 'Rotating assembly',
    summary: "The parts that turn the pistons' up-and-down motion into spinning motion.",
  },
  {
    id: 'valvetrain',
    name: 'Valvetrain',
    summary: 'The parts that open and close the valves at exactly the right moment.',
  },
  {
    id: 'air-and-fuel',
    name: 'Air and fuel',
    summary: 'The parts that bring air into the engine and add the right amount of fuel.',
  },
  {
    id: 'ignition',
    name: 'Ignition',
    summary: 'The parts that light the air-fuel mixture at the right moment.',
  },
  {
    id: 'exhaust',
    name: 'Exhaust',
    summary: 'The parts that carry the burnt gases out of the engine.',
  },
]

export const engineComponents: EngineComponent[] = [
  {
    id: 'piston',
    name: 'Piston',
    systemId: 'rotating-assembly',
    location: 'Inside each cylinder of the engine block.',
    summary:
      'A metal plug that slides up and down inside a cylinder, pushed down by the burning fuel-air mixture.',
    explanation: {
      beginner:
        "Each cylinder of the engine has a piston that slides up and down inside it. When the fuel and air mixture burns, the pressure pushes the piston down hard. That push is where the engine's power comes from.",
      intermediate:
        'The piston forms the moving floor of the combustion chamber. In a four-stroke engine it moves through four strokes: intake, compression, power and exhaust. Piston rings seal the gap between the piston and the cylinder wall, keeping combustion pressure in and oil out of the chamber. The piston is joined to the connecting rod by a short pin.',
      advanced:
        'Pistons are usually cast or forged aluminium alloy, chosen for low weight because the reciprocating mass creates large inertial loads at high rpm. A typical piston carries two compression rings and one oil control ring. The crown shape influences the compression ratio and the combustion; the skirt guides the piston and takes the side load as the rod angle changes. Heat leaves the piston through the rings, the cylinder wall and the engine oil. Engines built to run boost often use forged pistons and a lower compression ratio, which matters for the turbo experiment later.',
    },
    whyItExists:
      'Combustion creates pressure, and the piston is the part that turns that pressure into a force that can do useful work.',
    relatedIds: ['connecting-rod', 'crankshaft', 'cylinder-block', 'spark-plug'],
    ifItFails: {
      effect:
        "Worn rings or a damaged piston reduce the engine's compression and let oil into the combustion chamber. Severe damage can destroy the engine.",
      symptoms: [
        'Blue-grey smoke from the exhaust',
        'Oil level dropping faster than normal',
        'Loss of power',
        'Rattling or knocking noises from the engine',
        'Low compression readings when a mechanic tests the cylinders',
      ],
    },
    status: 'draft',
    sources: [],
  },
  {
    id: 'connecting-rod',
    name: 'Connecting rod',
    systemId: 'rotating-assembly',
    location: 'Between each piston and the crankshaft, inside the engine block.',
    summary: 'A strong metal arm that joins each piston to the crankshaft.',
    explanation: {
      beginner:
        'The connecting rod is a strong arm that joins a piston to the crankshaft. When the piston is pushed down, the rod passes that push on to the crankshaft and makes it turn.',
      intermediate:
        "The small end of the rod holds the piston pin and the large end wraps around the crankshaft on a bearing. As the crankshaft turns, the rod swings from side to side while the piston moves straight up and down. The rod is pushed hard during combustion and stretched by the piston's inertia at high rpm, so it has to be strong in both directions.",
      advanced:
        'Production rods are typically forged steel or powder-forged steel with a fracture-split cap. The big end runs on thin shell bearings supported by a pressurised film of oil, and oil starvation is a common cause of rod bearing failure. The rod ratio, which is the rod length divided by the crank stroke, affects how much side load the piston puts on the cylinder wall and how long the piston lingers near the top of its travel.',
    },
    whyItExists:
      'The piston moves in a straight line but the crankshaft rotates. The rod connects the two and allows one kind of motion to become the other.',
    relatedIds: ['piston', 'crankshaft'],
    ifItFails: {
      effect:
        'A worn rod bearing causes a deep knock. A broken rod usually destroys the engine and can punch a hole through the engine block.',
      symptoms: [
        'Deep knocking from the lower part of the engine that gets louder with engine speed',
        'Oil pressure warning light',
        'Metal particles in the engine oil',
      ],
    },
    safetyNote:
      'A deep knock together with a low-oil-pressure warning is serious. Stop the engine as soon as it is safe to do so, because driving on can destroy it.',
    status: 'draft',
    sources: [],
  },
  {
    id: 'crankshaft',
    name: 'Crankshaft',
    systemId: 'rotating-assembly',
    location: 'Along the bottom of the engine block, running the length of the engine.',
    summary: "A rotating shaft that turns the pistons' up-and-down pushes into rotation.",
    explanation: {
      beginner:
        'The crankshaft is the spinning shaft at the bottom of the engine. The pistons push on it through the connecting rods and force it to turn, a bit like your legs turning the pedals of a bicycle. Its rotation is what eventually reaches the wheels.',
      intermediate:
        'The crankshaft has offset sections called crank throws, which the connecting rods attach to. Main bearings hold it in the block, and counterweights balance the mass of the pistons and rods. A flywheel on one end smooths out the pulses of power, and the other end drives the timing belt or chain and the accessory belt through a pulley.',
      advanced:
        'In a typical inline-four, the four crank throws sit in one plane, which gives an even firing interval of 180 degrees of crank rotation but also an inherent second-order vibration at twice engine speed; many engines cancel it with balance shafts. Crankshafts are forged steel or cast iron, with hardened and ground bearing journals. A damper in the front pulley controls torsional vibration, which is the shaft twisting slightly between cylinder firings.',
    },
    whyItExists:
      'Power has to leave the engine as rotation so that it can drive the wheels, so the straight-line motion of the pistons must be converted.',
    relatedIds: ['piston', 'connecting-rod', 'cylinder-block', 'camshaft', 'timing-drive'],
    ifItFails: {
      effect:
        'Worn main bearings cause knocking and low oil pressure. A broken crankshaft stops the engine at once and usually means replacing the engine or a full rebuild.',
      symptoms: [
        'Deep rumbling or knocking from the bottom of the engine',
        'Oil pressure warning light',
        'Heavy vibration',
        'Engine stops suddenly and will not restart',
      ],
    },
    safetyNote:
      'The crankshaft pulley and belts are exposed on a running engine and can catch clothing, hair and fingers. Keep clear of them while the engine is running.',
    status: 'draft',
    sources: [],
  },

    {
    id: 'cylinder-block',
    name: 'Cylinder block',
    systemId: 'engine-structure',
    location:
      'The large central casting of the engine. The cylinder head bolts on top of it and the oil pan bolts underneath.',
    summary:
      'The main body of the engine, containing the cylinders and holding the crankshaft.',
    explanation: {
      beginner:
        'The engine block is the heavy metal body of the engine. It contains the cylinders where the pistons move, and almost everything else attaches to it. Think of it as the skeleton of the engine.',
      intermediate:
        'The block is a single casting that contains the cylinder bores, the supports for the crankshaft bearings, and passages for coolant and oil. The cylinder head is bolted on top, sealed by a head gasket, and the oil pan is fitted below. Coolant flows through passages around the cylinders, called water jackets, to carry heat away.',
      advanced:
        'Blocks are made of cast iron or aluminium alloy. Aluminium is lighter and sheds heat well, and usually has iron liners or a hard coating in the bores. The block must resist the combustion pressure that tries to lift the head off and the loads that the crankshaft passes into the main bearing caps. The bore (cylinder diameter) and stroke (piston travel) set the displacement of the engine. Closed-deck designs, where the top of the water jacket is supported, are stronger and are often chosen for engines that run high boost.',
    },
    whyItExists:
      'The engine needs a rigid, sealed structure that holds the cylinders and the crankshaft in exact alignment and contains the pressure of combustion.',
    relatedIds: ['piston', 'crankshaft', 'cylinder-head'],
    ifItFails: {
      effect:
        'Cracks or a warped top surface let coolant, oil and combustion gases leak into places they should not be. A cracked block usually means replacing the engine.',
      symptoms: [
        'Coolant level dropping with no visible leak',
        'White smoke from the exhaust',
        'Milky, light-brown residue under the oil filler cap or on the dipstick',
        'Engine overheating',
        'Visible oil or coolant leaks',
      ],
    },
    safetyNote:
      'Never open the radiator or coolant cap on a hot engine. The coolant is under pressure and can cause severe scalds.',
    status: 'draft',
    sources: [],
  },
  {
    id: 'cylinder-head',
    name: 'Cylinder head',
    systemId: 'engine-structure',
    location: 'Bolted to the top of the engine block, sealed by the head gasket.',
    summary:
      'The top section of the engine that closes the cylinders and holds the valves, camshafts and spark plugs.',
    explanation: {
      beginner:
        'The cylinder head is the lid of the engine. It sits on top of the block and closes the top of each cylinder. It also holds the valves that let air in and exhaust out, and the spark plugs that light the fuel.',
      intermediate:
        'The head contains the combustion chambers, the intake and exhaust ports, the valves and, in most modern engines, the camshafts. Coolant and oil passages run through it. A head gasket between the head and the block keeps combustion pressure, coolant and oil sealed from each other. The head bolts are tightened in a set order to a set torque so that the head clamps down evenly.',
      advanced:
        'Many modern heads are aluminium alloy with a dual overhead camshaft (DOHC) layout and four valves per cylinder, which improves airflow compared with older two-valve designs. The shape of the ports and chambers controls how the air swirls and tumbles, which affects burn speed and resistance to knock. The head has to stay flat, and overheating can warp it and let the gasket leak. Head bolts are often torque-to-yield designs that stretch slightly and are meant to be used only once.',
    },
    whyItExists:
      'The combustion chamber needs a closed top with openings that can be opened and shut, so that air and fuel can get in and exhaust gases can get out at the right moments.',
    relatedIds: ['cylinder-block', 'spark-plug', 'camshaft', 'valves', 'intake-manifold', 'fuel-injector', 'exhaust-manifold'],
    ifItFails: {
      effect:
        'A warped head or a failed head gasket lets combustion gas, coolant and oil mix or escape. Left unfixed, it usually leads to overheating and serious engine damage.',
      symptoms: [
        'Engine overheating',
        'White smoke from the exhaust',
        'Bubbles in the coolant reservoir',
        'Milky residue under the oil filler cap or on the dipstick',
        'Coolant level dropping with no visible leak',
        'Loss of power',
      ],
    },
    safetyNote:
      'Do not open the coolant cap while the engine is hot. The coolant is under pressure and can cause severe scalds.',
    status: 'draft',
    sources: [],
  },
  {
    id: 'spark-plug',
    name: 'Spark plug',
    systemId: 'ignition',
    location:
      'Screwed into the cylinder head, with its tip inside the combustion chamber of each cylinder.',
    summary: 'A small device that creates an electric spark to ignite the fuel-air mixture.',
    explanation: {
      beginner:
        'The spark plug is a small part screwed into each cylinder. At exactly the right moment it makes an electric spark, which lights the mixture of fuel and air and starts the burn that pushes the piston down.',
      intermediate:
        'An ignition coil supplies the plug with a very high voltage, in the tens of thousands of volts. The voltage jumps the small gap between the centre electrode and the ground electrode as a spark. The engine computer decides when the spark happens, a little before the piston reaches the top of its stroke, so that the peak of the pressure arrives at the right moment. Plugs wear over time as the electrodes erode and the gap widens.',
      advanced:
        'The heat range of a plug describes how quickly it sheds heat. A hotter plug keeps more heat and burns off deposits, while a colder plug runs cooler and resists pre-ignition. Engines making more power or running boost generally need a colder heat range and a smaller gap, because higher cylinder pressure makes it harder for the spark to jump and raises the risk of misfire. Iridium and platinum electrodes last longer than copper ones.',
    },
    whyItExists:
      'A petrol engine needs a precisely timed ignition source, because the compressed mixture does not reliably light by itself at the right moment.',
    relatedIds: ['cylinder-head', 'piston', 'fuel-injector'],
    ifItFails: {
      effect:
        'A worn or fouled plug can fail to light the mixture, which is called a misfire. The unburnt fuel wastes energy and can damage the catalytic converter over time.',
      symptoms: [
        'Rough idle or shaking',
        'Hesitation or jerking when accelerating',
        'Hard starting',
        'Poor fuel economy',
        'Flashing check-engine light during a misfire',
      ],
    },
    safetyNote:
      'The ignition system carries very high voltage. Do not touch the coils or plug leads while the engine is running or being cranked, and let a hot engine cool before touching any part of it.',
    status: 'draft',
    sources: [],
  },

    {
    id: 'camshaft',
    name: 'Camshaft',
    systemId: 'valvetrain',
    location: 'In the cylinder head on most modern engines, above the valves.',
    summary:
      'A rotating shaft with egg-shaped lobes that push the valves open at the right moments.',
    explanation: {
      beginner:
        'The camshaft is a shaft with egg-shaped bumps called lobes. As it spins, each lobe pushes a valve open and then lets it close again. The shape and position of the lobes decide when, and for how long, each valve is open.',
      intermediate:
        'In a four-stroke engine the camshaft turns at half the speed of the crankshaft, because each valve opens once for every two turns of the crank. The lobes press on the valves directly or through small followers, and springs close the valves again. Many engines have two camshafts in the head, one for the intake valves and one for the exhaust valves, which is called a DOHC layout.',
      advanced:
        'The lobe profile sets the valve lift, the duration and how quickly the valve opens and closes, which together shape where in the rev range the engine makes its power. Longer duration and more overlap, where the intake and exhaust valves are open together near top dead centre, favour high-rpm power but hurt idle quality and low-speed torque. Variable valve timing systems rotate the camshaft relative to the crankshaft to get a useful compromise across the rev range. On a boosted engine, overlap interacts with the pressure difference between intake and exhaust, so camshaft choices for turbocharged engines differ from those for naturally aspirated ones.',
    },
    whyItExists:
      'The valves must open and close at precise moments in the four-stroke cycle, and the camshaft is the mechanical timer that does this.',
    relatedIds: ['valves', 'timing-drive', 'crankshaft', 'cylinder-head'],
    ifItFails: {
      effect:
        'Worn lobes or bearings reduce how far the valves open, which costs power and causes noise. A broken camshaft stops the affected valves from opening at all.',
      symptoms: [
        'Ticking or tapping noise from the top of the engine',
        'Rough idle',
        'Loss of power',
        'Misfire on one or more cylinders',
        'Check-engine light',
      ],
    },
    status: 'draft',
    sources: [],
  },
  {
    id: 'valves',
    name: 'Valves',
    systemId: 'valvetrain',
    location: 'In the cylinder head, at the top of each combustion chamber.',
    summary:
      'Spring-loaded plugs that open to let air in or exhaust out, and seal shut during combustion.',
    explanation: {
      beginner:
        'Each cylinder has doors at the top called valves. Intake valves open to let air and fuel in, and exhaust valves open to let burnt gas out. While the mixture burns, they stay tightly shut so that none of the pressure escapes.',
      intermediate:
        'Each valve has a stem and a wide head that seals against a seat in the cylinder head. A spring holds it closed and the camshaft pushes it open. Many modern engines have four valves per cylinder, two for intake and two for exhaust. Exhaust valves run much hotter than intake valves because they sit in the burnt gas, so they are made from tougher materials.',
      advanced:
        'The valve springs must keep the valve following the cam lobe at high rpm. If a spring is too weak the valve can float, meaning it fails to close on time. Exhaust valves are often made of heat-resistant stainless alloys, and some performance designs use hollow stems filled with sodium to carry heat away. Intake valves run cooler and are usually made of a less exotic steel. Heat also leaves the valve through the seat into the cylinder head. On engines with mechanical valve adjusters the valve clearance must stay within specification, because a gap that is too tight can stop the valve closing fully and burn it.',
    },
    whyItExists:
      'The combustion chamber has to be sealed during compression and combustion but open at other times to exchange gases, and valves are the openings that can do both.',
    relatedIds: ['camshaft', 'cylinder-head', 'intake-manifold', 'exhaust-manifold'],
    ifItFails: {
      effect:
        'A valve that does not seal properly leaks compression and can burn through. A bent or broken valve can destroy the piston and the cylinder head.',
      symptoms: [
        'Misfire on one cylinder',
        'Loss of power',
        'Rough idle',
        'Popping sounds from the intake or exhaust',
        'Low compression reading on one cylinder',
      ],
    },
    status: 'draft',
    sources: [],
  },
  {
    id: 'timing-drive',
    name: 'Timing belt or chain',
    systemId: 'valvetrain',
    location:
      'At one end of the engine, usually behind a cover, linking the crankshaft to the camshaft.',
    summary: 'A belt or chain that keeps the camshaft turning in step with the crankshaft.',
    explanation: {
      beginner:
        'The timing belt or chain connects the crankshaft to the camshaft. It makes sure the valves open and close at exactly the right moment compared with where the pistons are. If it slips or breaks, that timing is lost.',
      intermediate:
        'The camshaft has to turn once for every two turns of the crankshaft, so its sprocket has twice as many teeth as the crankshaft sprocket. A rubber toothed belt runs dry behind a cover and has to be replaced at a set interval. A metal chain runs in engine oil and often lasts much longer, but it still wears and stretches. A tensioner keeps the belt or chain tight, and guides keep it on its path.',
      advanced:
        'On an interference engine the valves and pistons occupy the same space at different times, so if the timing is lost the pistons can hit the valves, causing severe damage. Non-interference engines have enough clearance to avoid this, so a failed belt only stops the engine. Chain stretch shows up as a gradual shift in camshaft timing that the engine computer can report as a fault code. When the belt also drives the water pump, the pump and the tensioner are often replaced at the same time, because most of the labour to reach them is shared.',
    },
    whyItExists:
      'The valves must open in step with the pistons, and a physical link between the crankshaft and the camshaft is the simplest way to guarantee that.',
    relatedIds: ['crankshaft', 'camshaft'],
    ifItFails: {
      effect:
        'If the belt or chain breaks or jumps teeth, the timing is lost and the engine stops or runs badly. On an interference engine this can bend valves and damage pistons, which is an expensive repair. A rubber belt often gives little warning before it fails, which is why it is replaced on a schedule.',
      symptoms: [
        'Rattling or ticking from the front of the engine, especially at start-up (chain)',
        'Engine stops suddenly while running and will not restart',
        'Engine cranks but will not start',
        'Check-engine light with a camshaft timing fault code',
        'Rough running after the timing has jumped',
      ],
    },
    safetyNote:
      'Follow the manufacturer replacement interval for a timing belt. A belt gives little warning before it breaks, and a break on an interference engine can cause very expensive damage. Timing work needs special tools and an exact procedure, so it is a job for a professional.',
    status: 'draft',
    sources: [],
  },

    {
    id: 'intake-manifold',
    name: 'Intake manifold',
    systemId: 'air-and-fuel',
    location:
      'Bolted to the side of the cylinder head, between the throttle body and the intake ports.',
    summary: 'A set of pipes that carries air from the throttle to each cylinder.',
    explanation: {
      beginner:
        'The intake manifold is a set of pipes that delivers the air the engine breathes to each of its cylinders. Air enters through the air filter and the throttle, then the manifold divides it up and sends a share to each cylinder.',
      intermediate:
        'Air passes through the air filter and the throttle body, which is the valve controlled by the accelerator pedal, and then into a chamber called the plenum. Individual pipes called runners lead from the plenum to the intake port of each cylinder. The manifold is shaped so that each cylinder receives about the same amount of air. On many engines it is made of plastic, which is light and helps keep the incoming air cooler.',
      advanced:
        'The length and diameter of the runners tune the pressure waves in the intake, so that a pulse of higher pressure arrives at the valve just as it opens. Long runners favour low-rpm torque and short runners favour high-rpm power, and some engines switch between two runner lengths. Vacuum in the manifold is also used to power the brake booster on many petrol engines, so a leak affects more than the air supply. On a turbocharged engine the intake runs above atmospheric pressure after the compressor, so the manifold and its seals must withstand boost.',
    },
    whyItExists:
      'Every cylinder needs its own share of air at the right moment, and the manifold is the plumbing that distributes it evenly.',
    relatedIds: ['cylinder-head', 'fuel-injector', 'valves'],
    ifItFails: {
      effect:
        'A leaking manifold or gasket lets unmeasured air into the engine, which upsets the air-fuel mixture. The engine then runs roughly and may set a fault code.',
      symptoms: [
        'Rough or unstable idle',
        'Hissing sound from the engine bay',
        'Check-engine light, often for a lean mixture',
        'Loss of power',
        'Poor fuel economy',
      ],
    },
    status: 'draft',
    sources: [],
  },
  {
    id: 'fuel-injector',
    name: 'Fuel injector',
    systemId: 'air-and-fuel',
    location:
      'In a port-injection engine, one injector per cylinder sits in the intake port, connected to a shared fuel rail.',
    summary:
      'An electrically controlled nozzle that sprays a measured amount of fuel into the engine.',
    explanation: {
      beginner:
        'The fuel injector is a small electric nozzle that sprays a fine mist of fuel into the air going into the engine. The engine computer decides exactly how much to spray, so the mixture of air and fuel is right for the driving conditions.',
      intermediate:
        'Fuel is held under pressure in a rail, and the engine computer opens each injector for a few thousandths of a second. The longer it stays open, the more fuel is delivered. The computer works out the amount from sensor readings, such as how much air is entering and how much oxygen is left in the exhaust. In a port-injection engine the injector sprays into the intake port behind the intake valve, while a direct-injection engine sprays straight into the cylinder.',
      advanced:
        'The usual target is a stoichiometric mixture, about 14.7 parts of air to one part of petrol by mass, which lets the catalytic converter clean the exhaust effectively. The computer enriches the mixture for cold starts and high load. Injectors are rated by how much fuel they flow at a given pressure. When boost is added, the injectors must supply more fuel or the mixture runs lean, which raises combustion temperatures and the risk of engine damage. Direct injection works at much higher pressure than port injection and cools the incoming charge as the fuel evaporates, which helps resist knock.',
    },
    whyItExists:
      'Engines need the right amount of fuel mixed with the air at every moment, and an electronically controlled injector measures it more precisely than older carburettors could.',
    relatedIds: ['intake-manifold', 'cylinder-head', 'spark-plug'],
    ifItFails: {
      effect:
        'A clogged injector delivers too little fuel and a leaking one delivers too much. Either way the air-fuel mixture is wrong, which causes rough running and can damage the engine or the catalytic converter.',
      symptoms: [
        'Rough idle',
        'Misfire on one cylinder',
        'Hesitation when accelerating',
        'Poor fuel economy',
        'Smell of fuel',
        'Hard starting',
      ],
    },
    safetyNote:
      'Fuel is highly flammable, and the fuel system stays under pressure even when the engine is off. Do not open fuel lines or work on injectors yourself. Take fuel system problems to a professional.',
    status: 'draft',
    sources: [],
  },
  {
    id: 'exhaust-manifold',
    name: 'Exhaust manifold',
    systemId: 'exhaust',
    location: 'Bolted to the side of the cylinder head, where the exhaust ports are.',
    summary:
      'A set of pipes that collects burnt gas from every cylinder and funnels it into the exhaust pipe.',
    explanation: {
      beginner:
        'The exhaust manifold collects the hot burnt gas pushed out of each cylinder and combines it into a single pipe. From there the gas flows through the rest of the exhaust system and out of the back of the car.',
      intermediate:
        'Each exhaust port of the cylinder head connects to a pipe, and these pipes merge into one outlet that leads on to the catalytic converter. The manifold gets extremely hot, so it is made of cast iron or stainless steel. The shape of the pipes matters: smooth, evenly sized pipes let the gas leave more easily, which helps the engine make more power.',
      advanced:
        'Exhaust gas leaves each cylinder in pulses. A well-designed header, with separate primary pipes of equal length, uses the pulse from one cylinder to help pull gas out of the next, an effect called scavenging. A simple cast manifold is cheaper and quieter but restricts the flow more. On a turbocharged engine the manifold also feeds exhaust gas to the turbine, so its shape and strength affect how quickly the turbo responds, and it must survive higher temperatures. Cracks and leaking gaskets are common failures because of the repeated heating and cooling.',
    },
    whyItExists:
      'Burnt gas from several separate cylinders has to be gathered into one pipe, and getting it out smoothly makes the engine more efficient.',
    relatedIds: ['cylinder-head', 'valves'],
    ifItFails: {
      effect:
        'A cracked manifold or leaking gasket lets hot exhaust gas escape before it reaches the catalytic converter. This causes noise and fault codes, and it can let dangerous exhaust fumes into the car.',
      symptoms: [
        'Ticking or tapping noise, especially when the engine is cold',
        'Loud exhaust sound',
        'Smell of exhaust inside the car',
        'Check-engine light',
        'Loss of power',
      ],
    },
    safetyNote:
      'Exhaust gas contains carbon monoxide, which is poisonous and has no smell. Never run an engine in a closed garage, and if you smell exhaust inside the car, open the windows and have it checked straight away. The manifold stays hot for a long time after the engine stops, so do not touch it.',
    status: 'draft',
    sources: [],
  },
]