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
    relatedIds: ['connecting-rod', 'crankshaft'],
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
    relatedIds: ['piston', 'connecting-rod'],
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
]