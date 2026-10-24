const sampleListing =
    [
        {
            "title": "Baseline Basketball Club",
            "sports": "Basketball",
            "description": "Full court with rubberized flooring, seating and a drinking water station.",
            "price": 1000,
            "phone": 9000000012,
            "email": "baseline.basketball.club@example.com",
            "image": "https://unsplash.com/photos/qYuICgYuBMs/download?force=true"
        },
        {
            "title": "Beach Point Volleyball",
            "sports": "Volleyball/Handball",
            "description": "Outdoor sand court with a relaxed vibe, changing rooms and refreshments nearby.",
            "price": 600,
            "phone": 9000000016,
            "email": "beach.point.volleyball@example.com",
            "image": "https://unsplash.com/photos/FcuE1a_pOA0/download?force=true"
        },
        {
            "title": "Family Fun Pool",
            "sports": "Swimming",
            "description": "Shallow family-friendly pool with a splash area and shaded seating.",
            "price": 250,
            "phone": 9000000020,
            "email": "family.fun.pool@example.com",
            "image": "https://unsplash.com/photos/JjUyjE-oEbM/download?force=true"
        },
        {
            "title": "Kickoff Football Arena",
            "sports": "Football",
            "description": "Artificial grass 7-a-side football pitch with floodlights and proper goal posts.",
            "price": 1500,
            "phone": 9000000005,
            "email": "kickoff.football.arena@example.com",
            "image": "https://unsplash.com/photos/PAe2UhGo-S4/download?force=true"
        },
        {
            "title": "Shuttle Smash Badminton Arena",
            "sports": "Indoor Sports",
            "description": "Four wooden-floor badminton courts with proper lighting and racket rental.",
            "price": 500,
            "phone": 9000000021,
            "email": "shuttle.smash.badminton.arena@example.com",
            "image": "https://unsplash.com/photos/rjWfNR_AC5g/download?force=true"
        },
        {
            "title": "Cue Masters Snooker Club",
            "sports": "Indoor Sports",
            "description": "Snooker and pool tables in an air-conditioned hall, open until late.",
            "price": 600,
            "phone": 9000000023,
            "email": "cue.masters.snooker.club@example.com",
            "image": "https://unsplash.com/photos/y6q8euj6rJs/download?force=true"
        },
        {
            "title": "Net & Ace Arena",
            "sports": "Volleyball/Handball",
            "description": "Indoor volleyball court with a cushioned floor, suitable for competitive matches.",
            "price": 900,
            "phone": 9000000014,
            "email": "net.and.ace.arena@example.com",
            "image": "https://unsplash.com/photos/cDKMfHJ5JNw/download?force=true"
        },
        {
            "title": "Green Arena Cricket Turf",
            "sports": "Cricket",
            "description": "Full-size box cricket turf with nets, floodlights and a scoreboard. Great for weekend matches.",
            "price": 1400,
            "phone": 9000000001,
            "email": "green.arena.cricket.turf@example.com",
            "image": "https://unsplash.com/photos/C2v6EeGXVQM/download?force=true"
        },
        {
            "title": "Night Owl Box Cricket",
            "sports": "Cricket",
            "description": "Covered box cricket arena open late with bright LED lighting. Ideal for 6-a-side games.",
            "price": 1000,
            "phone": 9000000003,
            "email": "night.owl.box.cricket@example.com",
            "image": "https://unsplash.com/photos/euwSpNi8K2s/download?force=true"
        },
        {
            "title": "Table Titans TT Lounge",
            "sports": "Indoor Sports",
            "description": "Six table tennis tables with professional-grade equipment and a snack bar.",
            "price": 400,
            "phone": 9000000022,
            "email": "table.titans.tt.lounge@example.com",
            "image": "https://unsplash.com/photos/JwxatcF2Oec/download?force=true"
        },
        {
            "title": "Downtown Hoops Center",
            "sports": "Basketball",
            "description": "Half-court setup, great for 3x3 games and shooting practice.",
            "price": 600,
            "phone": 9000000011,
            "email": "downtown.hoops.center@example.com",
            "image": "https://unsplash.com/photos/pX91vVDV6GQ/download?force=true"
        },
        {
            "title": "Stumps & Bails Ground",
            "sports": "Cricket",
            "description": "Well-maintained turf pitch with practice nets and seating for spectators.",
            "price": 1200,
            "phone": 9000000002,
            "email": "stumps.and.bails.ground@example.com",
            "image": "https://unsplash.com/photos/2Qg1WmFXC8I/download?force=true"
        },
        {
            "title": "Striker's Turf",
            "sports": "Football",
            "description": "5-a-side turf with high boundary nets so the ball stays in play. Water and parking available.",
            "price": 1100,
            "phone": 9000000006,
            "email": "strikers.turf@example.com",
            "image": "https://unsplash.com/photos/-nATH0CrkMU/download?force=true"
        },
        {
            "title": "Splash Club",
            "sports": "Swimming",
            "description": "Heated pool open all year, with lane swimming and coaching options.",
            "price": 450,
            "phone": 9000000018,
            "email": "splash.club@example.com",
            "image": "https://unsplash.com/photos/vy_cVJCAVG0/download?force=true"
        },
        {
            "title": "Slam Dunk Arena",
            "sports": "Basketball",
            "description": "Indoor wooden-floor basketball court with adjustable hoops and a scoreboard.",
            "price": 1200,
            "phone": 9000000010,
            "email": "slam.dunk.arena@example.com",
            "image": "https://unsplash.com/photos/3UARQ0Bg6kE/download?force=true"
        },
        {
            "title": "Olympic Lane Aquatic Center",
            "sports": "Swimming",
            "description": "50-metre Olympic-size pool for serious swimmers, with timing boards and showers.",
            "price": 500,
            "phone": 9000000019,
            "email": "olympic.lane.aquatic.center@example.com",
            "image": "https://unsplash.com/photos/QGdRrty4054/download?force=true"
        },
        {
            "title": "Hoops Court",
            "sports": "Basketball",
            "description": "Full-size outdoor basketball court with fiber-glass backboards and night lights.",
            "price": 800,
            "phone": 9000000009,
            "email": "hoops.court@example.com",
            "image": "https://unsplash.com/photos/ka4ZWDPjf-8/download?force=true"
        },
        {
            "title": "Indoor Sports Complex",
            "sports": "Indoor Sports",
            "description": "Multi-sport hall with badminton, table tennis, carrom and chess corners.",
            "price": 700,
            "phone": 9000000024,
            "email": "indoor.sports.complex@example.com",
            "image": "https://unsplash.com/photos/cTEzvYjhqso/download?force=true"
        },
        {
            "title": "AquaBlue Swimming Pool",
            "sports": "Swimming",
            "description": "25-metre pool with lifeguards, separate kids' section and clean changing rooms.",
            "price": 300,
            "phone": 9000000017,
            "email": "aquablue.swimming.pool@example.com",
            "image": "https://unsplash.com/photos/QGdRrty4054/download?force=true"
        },
        {
            "title": "City Kicks Futsal Court",
            "sports": "Football",
            "description": "Compact futsal court with a smooth surface, perfect for quick evening games.",
            "price": 900,
            "phone": 9000000008,
            "email": "city.kicks.futsal.court@example.com",
            "image": "https://unsplash.com/photos/K5ChxJaheKI/download?force=true"
        },
        {
            "title": "Goal Rush Sports Park",
            "sports": "Football",
            "description": "FIFA-style artificial turf, 9-a-side, with a spectator area and washrooms.",
            "price": 1900,
            "phone": 9000000007,
            "email": "goal.rush.sports.park@example.com",
            "image": "https://unsplash.com/photos/dKCKiC0BQtU/download?force=true"
        },
        {
            "title": "Champions Cricket Turf",
            "sports": "Cricket",
            "description": "Very large cricket turf with a professional-grade pitch and changing rooms.",
            "price": 1800,
            "phone": 9000000004,
            "email": "champions.cricket.turf@example.com",
            "image": "https://unsplash.com/photos/wB2_lYjauVI/download?force=true"
        },
        {
            "title": "Handball Hub",
            "sports": "Volleyball/Handball",
            "description": "Full-size handball court with proper goals and anti-slip flooring.",
            "price": 850,
            "phone": 9000000015,
            "email": "handball.hub@example.com",
            "image": "https://unsplash.com/photos/p7JycCKpo7w/download?force=true"
        },
        {
            "title": "Spike Zone Volleyball Court",
            "sports": "Volleyball/Handball",
            "description": "Sand volleyball court with regulation net and floodlights for evening play.",
            "price": 700,
            "phone": 9000000013,
            "email": "spike.zone.volleyball.court@example.com",
            "image": "https://unsplash.com/photos/dX3q7dmc_AI/download?force=true"
        }
    ];

module.exports = { data: sampleListing }
