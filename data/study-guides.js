/**
 * Fiches de Cours Pédagogiques & Schémas Interactifs
 * Conçues pour COMPRENDRE facilement :
 *  1. Définitions simples avec des mots clairs ("C'est quoi concrètement ?")
 *  2. L'essentiel à retenir en points courts (zéro gros pâté), directement lié aux questions des Quizz
 *  3. Schéma interactif pour visualiser le fonctionnement
 */

window.__STUDY_GUIDES__ = {
  // ===========================================================================
  // CHECKPOINT 1 : NETWORK SWITCHING (MODULES 1 - 7)
  // ===========================================================================
  'ccnp-encor-v9-switching': {
    courseId: 'ccnp-encor-v9-switching',
    badge: 'Fiche de Cours • Modules 1 à 7',
    title: 'Commutation Réseau (Network Switching)',
    intro: 'Dans ce module, on apprend comment les switches déplacent les trames dans un réseau local (LAN), comment découper un réseau en VLANs, éviter les boucles avec STP et assurer une passerelle toujours disponible.',
    definitions: [
      {
        term: 'VLAN (Virtual LAN)',
        simple: 'Un découpage logique d’un switch : deux PC sur le même switch mais dans deux VLANs différents ne peuvent pas se parler directement (comme s’ils étaient sur deux switches séparés).'
      },
      {
        term: 'Lien Trunk (IEEE 802.1Q)',
        simple: 'Un câble entre deux switches qui transporte le trafic de PLUSIEURS VLANs à la fois en collant une étiquette (tag de 4 octets) sur chaque trame.'
      },
      {
        term: 'Native VLAN',
        simple: 'Le seul VLAN dont les trames voyagent SANS étiquette sur un lien Trunk (par défaut le VLAN 1). Il doit être identique des deux côtés du câble.'
      },
      {
        term: 'CEF (Cisco Express Forwarding)',
        simple: 'Le moteur matériel ultra-rapide des switches/routeurs Cisco : il prépare à l’avance la table de routage (FIB) et les adresses MAC (Adjacency Table) pour transférer les paquets sans solliciter le processeur (CPU).'
      },
      {
        term: 'TCAM',
        simple: 'Une mémoire matérielle spéciale qui permet au switch de vérifier une ACL ou une règle QoS en un seul cycle d’horloge grâce à 3 valeurs : 0, 1 et X ("peu importe").'
      },
      {
        term: 'STP / RSTP (Spanning Tree)',
        simple: 'Protocole qui empêche les tempêtes de broadcast quand on branche plusieurs câbles entre des switches : il bloque temporairement les liens redondants pour éviter toute boucle.'
      },
      {
        term: 'EtherChannel (LACP / PAgP)',
        simple: 'Technique qui regroupe jusqu’à 8 câbles physiques entre deux switches en un seul "gros tuyau" logique (Port-Channel) pour additionner la vitesse sans que STP ne les bloque.'
      },
      {
        term: 'FHRP (HSRP / VRRP / GLBP)',
        simple: 'Des protocoles qui permettent à 2 routeurs de partager une adresse IP virtuelle commune : si le routeur principal tombe en panne, le second prend le relais de façon invisible pour les PC.'
      }
    ],
    interactiveType: 'switching-sim',
    interactiveTitle: 'Schéma Interactif : Tester EtherChannel (LACP / PAgP) & Comparer HSRP / VRRP / GLBP',
    sections: [
      {
        id: 'sw-cef-mac',
        tag: 'Notions 1 & 2',
        title: '1. Comment un Switch apprend et transfère (Table MAC, CEF & TCAM)',
        idea: 'Un switch apprend qui est où en regardant l’adresse MAC SOURCE des trames qui entrent, et décide où les envoyer en regardant l’adresse MAC DESTINATION.',
        points: [
          '<strong>Apprentissage MAC (Table CAM)</strong> : le switch enregistre l’adresse <strong>MAC Source</strong> + le numéro du port. Une entrée expire au bout de <strong>300 secondes</strong> par défaut.',
          '<strong>Trame inconnue (Unknown Unicast) ou Broadcast</strong> : si la MAC destination n’est pas dans sa table, le switch <strong>inonde (flood)</strong> la trame sur tous les ports du même VLAN sauf celui par où elle est arrivée.',
          '<strong>Les 3 vitesses de transfert Cisco</strong> : <strong>Process Switching</strong> (lent, le CPU traite chaque paquet) → <strong>Fast Switching</strong> (le 1er paquet passe par le CPU, la suite va en cache) → <strong>CEF</strong> (le plus rapide, tout est pré-calculé en matériel dans la <strong>FIB</strong> et l’<strong>Adjacency Table</strong>).',
          '<strong>SDM Templates</strong> : répartit la mémoire TCAM selon l’usage du switch. ⚠️ Changer de template SDM oblige à <strong>redémarrer (reload)</strong> le switch.'
        ],
        tip: 'Dans les questions sur la table MAC : le switch n’apprend JAMAIS une adresse MAC à partir de la destination, uniquement à partir de l’adresse MAC source.'
      },
      {
        id: 'sw-vlan-stp',
        tag: 'Notions 3 & 4',
        title: '2. VLANs, Trunks (DTP/VTP) et Spanning Tree (STP vs RSTP)',
        idea: 'DTP négocie automatiquement les liens Trunk, tandis que RSTP élimine les boucles réseau en moins d’une seconde.',
        points: [
          '<strong>Négociation de Trunk (DTP)</strong> : le mode <code>dynamic desirable</code> initie activement le Trunk, alors que <code>dynamic auto</code> attend passivement. Donc <strong>Auto + Auto = port Access</strong> (pas de Trunk !).',
          '<strong>VTPv3</strong> : synchronise la liste des VLANs entre switches. La version 3 supporte les <strong>VLANs étendus (1006 à 4094)</strong> et protège contre l’écrasement accidentel grâce au serveur primaire (<code>vtp primary</code>).',
          '<strong>Élection STP</strong> : le switch avec le <strong>plus petit Bridge ID</strong> (Priorité 32768 par défaut + adresse MAC la plus basse) devient le <strong>Root Bridge</strong>.',
          '<strong>RSTP (802.1w) vs STP (802.1D)</strong> : RSTP réduit les états de port à 3 : <strong>Discarding</strong> (bloque), <strong>Learning</strong> (apprend les MAC sans transférer) et <strong>Forwarding</strong> (transfère). Le port de secours vers le Root s’appelle <strong>Alternate Port</strong>.',
          '<strong>Protections STP</strong> : <strong>PortFast</strong> (active immédiatement un port PC), <strong>BPDU Guard</strong> (coupe le port en <em>err-disabled</em> si quelqu’un branche un switch dessus), <strong>Root Guard</strong> (empêche un switch externe de devenir Root Bridge).'
        ],
        table: {
          headers: ['État RSTP (802.1w)', 'Équivalent ancien STP (802.1D)', 'Apprend les adresses MAC ?', 'Transmet les données ?'],
          rows: [
            ['Discarding', 'Disabled / Blocking / Listening', 'Non', 'Non'],
            ['Learning', 'Learning', 'Oui', 'Non'],
            ['Forwarding', 'Forwarding', 'Oui', 'Oui']
          ]
        }
      },
      {
        id: 'sw-ec-fhrp',
        tag: 'Notions 5, 6 & 7',
        title: '3. EtherChannel (LACP vs PAgP) & Redondance de Passerelle (FHRP)',
        idea: 'EtherChannel fusionne plusieurs câbles entre switches ; FHRP (HSRP/VRRP/GLBP) fusionne plusieurs routeurs derrière une seule IP de passerelle.',
        points: [
          '<strong>LACP (Standard 802.3ad)</strong> : utilise les modes <strong>Active</strong> et <strong>Passive</strong>. (Passive + Passive = ne fonctionne pas).',
          '<strong>PAgP (Propriétaire Cisco)</strong> : utilise les modes <strong>Desirable</strong> et <strong>Auto</strong>. (Auto + Auto = ne fonctionne pas).',
          '<strong>HSRP (Cisco)</strong> : 1 routeur <strong>Active</strong> + 1 routeur <strong>Standby</strong>. Le routeur avec la plus haute priorité (défaut 100), ou à défaut la plus grande IP, gagne. ⚠️ L’option <strong>Preempt</strong> est désactivée par défaut !',
          '<strong>VRRP (Standard ouvert)</strong> : 1 <strong>Master</strong> + des <strong>Backups</strong>. Fonctionne comme HSRP mais entre marques différentes et <strong>Preempt est activé par défaut</strong>.',
          '<strong>GLBP (Cisco)</strong> : le seul qui fait de l’<strong>équilibrage de charge actif-actif</strong> ! 1 chef (<strong>AVG</strong>) distribue le trafic entre jusqu’à <strong>4 routeurs actifs (AVF)</strong> simultanément.'
        ],
        table: {
          headers: ['Protocole FHRP', 'Standard', 'Rôles', 'Partage de charge actif ?', 'Preempt par défaut'],
          rows: [
            ['HSRP (v1 / v2)', 'Cisco', 'Active / Standby', 'Non (1 seul routeur transfère)', '❌ Non'],
            ['VRRP', 'Standard IETF', 'Master / Backup', 'Non (1 seul routeur transfère)', '✅ Oui'],
            ['GLBP', 'Cisco', '1 AVG + jusqu’à 4 AVF', '✅ Oui (jusqu’à 4 routeurs en même temps)', 'Non sur AVG / Oui sur AVF']
          ]
        },
        tip: 'Pour qu’un EtherChannel monte, tous les ports doivent avoir exactement la même vitesse, le même duplex, le même mode (Access ou Trunk) et les mêmes VLANs autorisés.'
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 2 : NETWORK ROUTING (MODULES 8 - 13)
  // ===========================================================================
  'ccnp-encor-v9-routing': {
    courseId: 'ccnp-encor-v9-routing',
    badge: 'Fiche de Cours • Modules 8 à 13',
    title: 'Routage Réseau (Network Routing)',
    intro: 'Ce module explique comment un routeur choisit le meilleur chemin parmi plusieurs protocoles (EIGRP, OSPF, BGP), comment fonctionnent les aires OSPF et comment le Multicast et le NAT acheminent les paquets.',
    definitions: [
      {
        term: 'Longest Prefix Match (Masque le plus long)',
        simple: 'La règle n°1 d’un routeur : pour envoyer un paquet, il choisit TOUJOURS la route la plus précise dans sa table (un /26 gagne toujours contre un /24 ou un /16, quel que soit le protocole).'
      },
      {
        term: 'Distance Administrative (AD)',
        simple: 'La note de "fiabilité" d’un protocole de routage (de 0 à 255). Plus le chiffre est petit, plus le routeur lui fait confiance (Connecté=0, Statique=1, eBGP=20, EIGRP=90, OSPF=110).'
      },
      {
        term: 'EIGRP Successor vs Feasible Successor',
        simple: 'En EIGRP, le "Successor" est le meilleur chemin actuel. Le "Feasible Successor" est le chemin de secours déjà vérifié sans boucle, prêt à prendre le relais instantanément.'
      },
      {
        term: 'OSPF LSA (Link-State Advertisement)',
        simple: 'Les "fiches d’information" que les routeurs OSPF s’échangent pour dessiner la carte complète du réseau (la base de données LSDB). Il existe plusieurs types de LSA (1 à 7).'
      },
      {
        term: 'ABR & ASBR (en OSPF)',
        simple: 'Un ABR est un routeur placé à la frontière entre deux aires OSPF (ex: Area 0 et Area 10). Un ASBR est un routeur qui importe des routes externes (ex: d’EIGRP ou BGP) dans OSPF.'
      },
      {
        term: 'eBGP vs iBGP',
        simple: 'Le protocole de routage d’Internet (TCP port 179). On parle d’eBGP entre deux entreprises/opérateurs différents (AS différents) et d’iBGP entre routeurs d’un même réseau (même AS).'
      },
      {
        term: 'Rendezvous Point (RP en Multicast)',
        simple: 'En Multicast PIM Sparse-Mode, c’est le routeur qui sert de "point de rencontre" central où les sources envoient leur flux et où les récepteurs viennent s’abonner.'
      },
      {
        term: 'NAT (Inside Local vs Inside Global)',
        simple: 'Inside Local est l’adresse IP privée de votre PC à la maison (ex: 192.168.1.10). Inside Global est l’adresse IP publique de votre box vue par Internet.'
      }
    ],
    interactiveType: 'routing-sim',
    interactiveTitle: 'Schéma Interactif : Aires OSPF (Filtrage des LSA) & Les 8 étapes du choix BGP Best Path',
    sections: [
      {
        id: 'rt-decision-eigrp',
        tag: 'Notions 1 & 2',
        title: '1. Comment le routeur choisit une route & EIGRP (DUAL)',
        idea: 'Il ne faut jamais confondre le choix au moment d’installer une route dans la table (AD / Métrique) et le choix au moment de transférer un paquet (Longest Prefix Match).',
        points: [
          '<strong>1. Masque le plus précis d’abord</strong> : si la table contient <code>10.1.1.0/26</code> (appris en RIP) et <code>10.1.0.0/16</code> (appris en EIGRP), un paquet pour <code>10.1.1.5</code> prendra la route <strong>/26</strong> car elle est plus précise.',
          '<strong>2. Distance Administrative (AD)</strong> : sert uniquement quand deux protocoles proposent <strong>exactement le même réseau avec le même masque</strong>. Le plus petit chiffre gagne : <strong>eBGP (20) < EIGRP (90) < OSPF (110) < RIP (120) < EIGRP Externe (170) < iBGP (200)</strong>.',
          '<strong>Route Statique Flottante (Floating Static Route)</strong> : une route statique de secours à qui l’on donne une AD plus élevée que le protocole dynamique (ex: AD 130 pour n’apparaître que si OSPF 110 tombe).',
          '<strong>Condition de secours EIGRP (Feasibility Condition)</strong> : pour qu’un voisin devienne chemin de secours (<em>Feasible Successor</em>), sa distance annoncée (<strong>RD / Reported Distance</strong>) doit être plus petite que notre meilleure distance totale actuelle (<strong>FD / Feasible Distance</strong>) : <strong><code>RD &lt; FD</code></strong>.'
        ],
        tip: 'Pour que deux routeurs deviennent voisins en EIGRP, ils doivent avoir le même numéro d’AS et les mêmes valeurs K (K-values). En revanche, en EIGRP, les timers Hello/Hold n’ont pas besoin d’être identiques (contrairement à OSPF) !'
      },
      {
        id: 'rt-ospf-lsa',
        tag: 'Notions 3 & 4',
        title: '2. OSPF : Voisinage, Types de LSA (1 à 7) et Aires Spéciales',
        idea: 'OSPF découpe le réseau en "Aires" connectées à l’Area 0 (Backbone) pour réduire la taille de la table de routage en filtrant certains types de LSA.',
        points: [
          '<strong>Devenir voisins OSPF</strong> : les deux routeurs doivent avoir la <strong>même Area</strong>, les <strong>mêmes timers Hello/Dead</strong>, le <strong>même MTU</strong> (sinon bloqué en état <em>ExStart</em>), le même type de réseau et un <strong>Router-ID unique</strong>.',
          '<strong>Rôle du DR / BDR</strong> : sur un switch Ethernet, OSPF élit un <strong>DR (Designated Router)</strong> (priorité la plus haute, ou plus grand Router-ID) pour éviter que tous les routeurs ne s’échangent tout en double. Une priorité de <strong>0</strong> interdit au routeur d’être élu. Deux routeurs non-DR (<em>DROthers</em>) restent en état <strong>2-Way</strong> entre eux : c’est tout à fait normal.',
          '<strong>Ordre de préférence OSPF</strong> : Intra-Area (<strong>O</strong>) > Inter-Area (<strong>O IA</strong>) > Externe Type 1 (<strong>N1 / E1</strong>) > Externe Type 2 (<strong>N2 / E2</strong>).',
          '<strong>Les LSA à connaître</strong> : <strong>LSA 1</strong> (chaque routeur dans son aire), <strong>LSA 2</strong> (généré par le DR), <strong>LSA 3</strong> (routes d’une autre aire envoyées par l’ABR), <strong>LSA 5</strong> (routes externes hors-OSPF envoyées par l’ASBR), <strong>LSA 7</strong> (route externe dans une aire NSSA).'
        ],
        table: {
          headers: ['Type d’Aire OSPF', 'Ce qu’elle bloque', 'Ce qu’elle autorise en plus', 'Astuce pour les questions'],
          rows: [
            ['Stub Area', 'Bloque les routes externes (LSA 4 & 5)', 'Garde les routes des autres aires (LSA 3)', 'Remplace les routes externes par une route par défaut O*IA'],
            ['Totally Stubby', 'Bloque LSA 3, LSA 4 et LSA 5', 'Ne garde que ses routes locales + 0.0.0.0/0', 'La table la plus légère ! Se configure avec "stub no-summary" sur l’ABR'],
            ['NSSA', 'Bloque les LSA 5 venant d’ailleurs', 'Autorise un ASBR local grâce au LSA 7', 'L’ABR traduit le LSA 7 en LSA 5 vers l’Area 0'],
            ['Totally NSSA', 'Bloque LSA 3, 4 et 5', 'Autorise un ASBR local (LSA 7) + 0.0.0.0/0 auto', 'Se configure avec "nssa no-summary" sur l’ABR']
          ]
        }
      },
      {
        id: 'rt-bgp-mcast',
        tag: 'Notions 5 & 6',
        title: '3. BGP (Choisir le meilleur chemin) & Multicast / NAT',
        idea: 'Contrairement à OSPF qui regarde la vitesse des liens, BGP choisit son chemin selon une liste d’attributs politiques dans un ordre précis.',
        points: [
          '<strong>Condition n°0 en BGP</strong> : une route BGP n’est utilisable que si l’adresse IP du <strong>Next-Hop est joignable</strong>. Comme iBGP ne change pas le Next-Hop reçu d’un voisin eBGP, on met <code>next-hop-self</code> sur le routeur de bordure.',
          '<strong>Les 4 premiers critères BGP (les plus posés en question)</strong> : <strong>1. Weight</strong> (le plus grand gagne, local au routeur Cisco) → <strong>2. Local Preference</strong> (le plus grand gagne, partagé dans tout notre AS pour choisir par où <em>sortir</em>) → <strong>3. Route locale</strong> → <strong>4. AS_PATH</strong> (le chemin qui traverse le <em>moins</em> d’AS gagne).',
          '<strong>Multicast PIM & RPF Check</strong> : <strong>PIM Dense Mode</strong> inonde tout le réseau puis coupe les branches inutiles. <strong>PIM Sparse Mode</strong> utilise un point central (<strong>RP</strong>) où seuls ceux qui demandent le flux le reçoivent. Le <strong>RPF Check</strong> vérifie l’IP Source du paquet pour éviter les boucles.'
        ]
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 3 : NETWORK SECURITY (MODULES 14 - 16)
  // ===========================================================================
  'ccnp-encor-v9-security': {
    courseId: 'ccnp-encor-v9-security',
    badge: 'Fiche de Cours • Modules 14 à 16',
    title: 'Sécurité Réseau (Network Security)',
    intro: 'Ce module montre comment protéger le processeur du routeur (CoPP), bloquer les attaques sur le réseau local (DHCP Snooping, DAI), contrôler qui se connecte (802.1X) et administrer les équipements (TACACS+ vs RADIUS).',
    definitions: [
      {
        term: 'CoPP (Control Plane Policing)',
        simple: 'Un pare-feu de débit interne qui protège le processeur (CPU) du routeur contre la surcharge (ex: trop de pings) tout en laissant passer en priorité les protocoles vitaux comme OSPF ou BGP.'
      },
      {
        term: 'DHCP Snooping',
        simple: 'Le vigile du switch qui empêche un pirate de brancher un faux serveur DHCP : seuls les ports déclarés "Trusted" (vers le vrai serveur) ont le droit d’envoyer des offres d’adresses IP.'
      },
      {
        term: 'DAI (Dynamic ARP Inspection)',
        simple: 'Sécurité qui bloque l’usurpation ARP (Man-in-the-Middle) : le switch vérifie dans la table du DHCP Snooping que l’adresse IP annoncée appartient bien à la bonne adresse MAC.'
      },
      {
        term: 'AAA (Authentication, Authorization, Accounting)',
        simple: '1. Authentication = Qui es-tu ? (Login) • 2. Authorization = Qu’as-tu le droit de faire ? • 3. Accounting = Journaliser tout ce qui a été fait.'
      },
      {
        term: 'TACACS+ vs RADIUS',
        simple: 'Deux protocoles pour relier un switch/routeur à un serveur AAA. TACACS+ (Cisco) sert à contrôler les administrateurs (commande par commande). RADIUS sert à authentifier les utilisateurs (Wi-Fi / 802.1X).'
      },
      {
        term: 'IEEE 802.1X',
        simple: 'Sécurité qui verrouille physiquement une prise RJ-45 du switch tant que le PC branché dessus n’a pas prouvé son identité auprès du serveur RADIUS (Cisco ISE).'
      },
      {
        term: 'MAB & WebAuth',
        simple: 'Solutions quand un appareil ne supporte pas 802.1X : MAB autorise une imprimante grâce à son adresse MAC, et WebAuth affiche une page Web de connexion pour les invités.'
      },
      {
        term: 'EAP-TLS vs PEAP',
        simple: 'Les méthodes d’échange de sécurité : EAP-TLS exige un certificat sur le serveur ET sur chaque PC client (le plus sûr). PEAP n’exige un certificat que sur le serveur (plus simple).'
      }
    ],
    interactiveType: 'security-sim',
    interactiveTitle: 'Schéma Interactif : Chaîne de Défense Layer 2 (DHCP Snooping → DAI → IPSG) & Flux 802.1X',
    sections: [
      {
        id: 'sec-l2-copp',
        tag: 'Notions 1 & 2',
        title: '1. Sécurité sur le Switch (Port-Security, DHCP Snooping, DAI) & CoPP',
        idea: 'Le DHCP Snooping est la fondation : il crée l’annuaire officiel (MAC ↔ IP ↔ Port) que DAI et IP Source Guard utilisent ensuite pour bloquer les pirates.',
        points: [
          '<strong>Port-Security (Limiter les adresses MAC sur un port)</strong> : en cas d’adresse MAC intruse, 3 réactions possibles : <strong>Protect</strong> (jette en silence), <strong>Restrict</strong> (jette + envoie une alerte Syslog/SNMP), <strong>Shutdown</strong> (par défaut : coupe complètement le port en état <em>err-disabled</em>).',
          '<strong>La chaîne DHCP Snooping → DAI → IPSG</strong> : 1) <strong>DHCP Snooping</strong> bloque les faux serveurs DHCP sur les ports <em>Untrusted</em> et remplit la table de liaison. 2) <strong>DAI</strong> utilise cette table pour jeter les faux paquets ARP. 3) <strong>IPSG (IP Source Guard)</strong> utilise cette table pour bloquer les paquets IP usurpés.',
          '<strong>Mettre en place CoPP (Control Plane Policing)</strong> : se configure en 4 étapes : créer une <strong>ACL</strong> → l’appeler dans une <strong>Class-Map</strong> → fixer la limite dans une <strong>Policy-Map</strong> → l’appliquer sur l’interface <strong><code>control-plane</code></strong>.'
        ],
        tip: 'Sur un switch avec DHCP Snooping ou DAI, tous les ports sont "Untrusted" (non fiables) par défaut. Il faut déclarer "trust" uniquement les ports qui remontent vers le vrai serveur DHCP ou les autres switches.'
      },
      {
        id: 'sec-aaa-wifi',
        tag: 'Notions 3 & 4',
        title: '2. TACACS+ vs RADIUS, les 3 rôles 802.1X et la Sécurité Wi-Fi (WPA3)',
        idea: 'Retenir le tableau comparatif TACACS+ vs RADIUS et les 3 acteurs du 802.1X permet de répondre à la moitié des questions de ce checkpoint.',
        points: [
          '<strong>Les 3 acteurs du 802.1X</strong> : <strong>Supplicant</strong> (le PC client) ↔ parle en <strong>EAPOL</strong> (Couche 2) avec l’<strong>Authenticator</strong> (le Switch ou contrôleur Wi-Fi) ↔ parle en <strong>RADIUS</strong> (Couche 3) avec l’<strong>Authentication Server</strong> (Cisco ISE).',
          '<strong>Zone-Based Firewall (ZBPF)</strong> : sur un routeur Cisco, deux interfaces dans la <em>même</em> zone de sécurité communiquent librement. Le trafic entre deux zones différentes est bloqué par défaut sauf si une <strong>Zone-Pair</strong> l’autorise (actions : <em>Inspect</em>, <em>Pass</em> ou <em>Drop</em>). La zone <strong>Self</strong> désigne le routeur lui-même.',
          '<strong>WPA3 (Wi-Fi moderne)</strong> : remplace l’ancien échange WPA2-PSK par <strong>SAE (Simultaneous Authentication of Equals)</strong> pour empêcher le piratage de mot de passe par dictionnaire et chiffre les trames de gestion Wi-Fi (<strong>802.11w PMF</strong>).'
        ],
        table: {
          headers: ['Critère à l’examen', 'TACACS+ (Administration)', 'RADIUS (Accès Réseau / Wi-Fi)'],
          rows: [
            ['Protocole & Port', 'TCP port 49', 'UDP ports 1812 / 1813 (ou 1645 / 1646)'],
            ['Ce qui est chiffré', '✅ TOUT le paquet (corps complet)', '⚠️ Uniquement le mot de passe'],
            ['Séparation du AAA', 'Sépare AuthN, AuthZ et Accounting', 'Combine Authentication + Authorization'],
            ['Usage principal', 'Contrôler chaque commande CLI d’un admin', 'Connecter les utilisateurs (802.1X, Wi-Fi, VPN)']
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 4 : VIRTUALIZATION & NETWORK SERVICES (MODULES 17 - 20)
  // ===========================================================================
  'ccnp-encor-v9-virtualization': {
    courseId: 'ccnp-encor-v9-virtualization',
    badge: 'Fiche de Cours • Modules 17 à 20',
    title: 'Virtualisation & Services Réseau',
    intro: 'Ce module explique comment virtualiser des serveurs (Hyperviseurs) et des routeurs (VRF), comment créer des tunnels VPN sécurisés (GRE + IPsec), et comment surveiller le réseau (Syslog, SNMP, NetFlow, SPAN).',
    definitions: [
      {
        term: 'Hyperviseur Type 1 vs Type 2',
        simple: 'Le logiciel qui fait tourner des machines virtuelles (VM). Type 1 s’installe directement sur le serveur nu (ex: VMware ESXi, KVM). Type 2 s’ouvre comme une application sur Windows/Mac (ex: VirtualBox).'
      },
      {
        term: 'VRF (Virtual Routing and Forwarding)',
        simple: 'L’équivalent d’un VLAN mais pour un routeur (Couche 3) : cela divise un routeur physique en plusieurs "routeurs virtuels" ayant chacun leur propre table de routage isolée.'
      },
      {
        term: 'Tunnel GRE',
        simple: 'Un tunnel virtuel entre deux routeurs qui permet de faire passer des protocoles de routage (OSPF, EIGRP, Multicast) à travers Internet, mais SANS aucun chiffrement.'
      },
      {
        term: 'IPsec (IKE + ESP)',
        simple: 'La technologie de VPN qui chiffre et sécurise les paquets IP sur Internet. Contrairement à GRE, IPsec tout seul ne supporte pas le trafic Multicast (d’où l’usage combiné de "GRE over IPsec").'
      },
      {
        term: 'SNMP (v1/v2c vs v3)',
        simple: 'Protocole qui permet à un serveur de supervision d’interroger la santé des routeurs. SNMPv3 est la version sécurisée qui chiffre les échanges avec un vrai compte utilisateur (mode authPriv).'
      },
      {
        term: 'Syslog (Niveaux 0 à 7)',
        simple: 'Le système de journalisation qui envoie les alertes du routeur vers un serveur central (UDP 514), classées de 0 (Urgence absolue) à 7 (Debug).'
      },
      {
        term: 'NetFlow vs SPAN / ERSPAN',
        simple: 'NetFlow envoie seulement le "relevé téléphonique" (qui parle à qui et quel volume, sans le contenu). SPAN/ERSPAN copie l’intégralité des paquets pour les analyser dans Wireshark.'
      },
      {
        term: 'IP SLA & Cisco EEM',
        simple: 'IP SLA teste en permanence la qualité de la ligne (pings automatiques). EEM est un petit robot interne au routeur qui déclenche un script dès qu’une alerte apparaît.'
      }
    ],
    interactiveType: 'virtualization-sim',
    interactiveTitle: 'Schéma Interactif : Voir l’encapsulation d’un paquet (IP / GRE / IPsec) & Tester les niveaux Syslog (0 à 7)',
    sections: [
      {
        id: 'virt-tunnels',
        tag: 'Notions 1 & 2',
        title: '1. Hyperviseurs, VRF-Lite et Tunnels (GRE vs IPsec)',
        idea: 'GRE sait transporter les protocoles de routage (Multicast) mais ne chiffre rien. IPsec chiffre tout mais ne transporte que de l’Unicast. Ensemble ("GRE over IPsec"), ils font les deux !',
        points: [
          '<strong>Tunnel GRE (Protocole IP 47)</strong> : ajoute <strong>24 octets</strong> d’en-tête (la MTU passe de 1500 à <strong>1476 octets</strong>). ⚠️ <em>Piège du Recursive Routing</em> : il ne faut jamais annoncer l’adresse IP publique du tunnel à l’intérieur du tunnel lui-même, sinon le tunnel tombe en boucle.',
          '<strong>IPsec</strong> : s’établit en 2 phases avec <strong>IKE (UDP 500 / 4500)</strong>. Le protocole <strong>ESP (IP 50)</strong> chiffre et authentifie le paquet, tandis que <strong>AH (IP 51)</strong> authentifie seulement sans rien chiffrer.',
          '<strong>Mode Transport vs Mode Tunnel</strong> : en mode <strong>Transport</strong>, on garde l’en-tête IP d’origine. En mode <strong>Tunnel</strong>, on chiffre tout le paquet IP d’origine et on rajoute un nouvel en-tête IP public devant.'
        ]
      },
      {
        id: 'virt-monitoring',
        tag: 'Notions 3 & 4',
        title: '2. Supervision Réseau : NTP, SNMPv3, Syslog (0 à 7), NetFlow & ERSPAN',
        idea: 'Savoir quel outil choisir selon le besoin : l’heure (NTP), l’état matériel (SNMP), les journaux d’alertes (Syslog), les statistiques de trafic (NetFlow) ou la capture complète (SPAN).',
        points: [
          '<strong>NTP (UDP 123)</strong> : synchronise les horloges par distance (<strong>Stratum</strong>) : une horloge atomique est Stratum 0, le serveur directement relié est <strong>Stratum 1</strong>, etc. (16 = non synchronisé).',
          '<strong>Les 3 niveaux SNMPv3</strong> : <code>noAuthNoPriv</code> (aucun mot de passe ni chiffrement) → <code>authNoPriv</code> (mot de passe haché MD5/SHA sans chiffrement) → <strong><code>authPriv</code></strong> (authentification SHA + chiffrement AES : le plus sécurisé).',
          '<strong>Les 8 niveaux Syslog (0 à 7)</strong> : plus le chiffre est <strong>petit</strong>, plus l’alerte est <strong>grave</strong>. Si on configure le niveau 4 (Warning), les niveaux <strong>0, 1, 2, 3 et 4</strong> sont envoyés.',
          '<strong>SPAN vs RSPAN vs ERSPAN</strong> : <strong>SPAN</strong> copie le trafic sur le même switch ; <strong>RSPAN</strong> l’envoie sur un autre switch via un VLAN L2 ; <strong>ERSPAN</strong> l’envoie à travers n’importe quel routeur L3 grâce à un tunnel <strong>GRE</strong>.'
        ],
        table: {
          headers: ['Niveau Syslog', 'Nom à retenir', 'Moyen mnémotechnique (Every Awesome Cisco...)'],
          rows: [
            ['0 / 1 / 2', '0: Emergencies • 1: Alerts • 2: Critical', 'Every • Awesome • Cisco (Pannes graves)'],
            ['3 / 4', '3: Errors • 4: Warnings', 'Engineer • Will (Erreurs d’interface / Avertissements)'],
            ['5 / 6 / 7', '5: Notifications • 6: Informational • 7: Debugging', 'Need • Icecream • Daily (Infos normales & Debug)']
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 5 : PROGRAMMABILITY (MODULES 21 - 22)
  // ===========================================================================
  'ccnp-encor-v9-programmability': {
    courseId: 'ccnp-encor-v9-programmability',
    badge: 'Fiche de Cours • Modules 21 à 22',
    title: 'Programmabilité & Automatisation',
    intro: 'Au lieu de configurer 100 routeurs un par un à la main en ligne de commande (CLI), la programmabilité permet de les piloter automatiquement avec des fichiers structurés (JSON, YAML, XML), des modèles (YANG) et des outils comme Ansible.',
    definitions: [
      {
        term: 'JSON, XML et YAML',
        simple: 'Trois façons d’écrire des données pour qu’un programme les lise facilement : JSON utilise des accolades { }, XML utilise des balises <tag>, et YAML utilise des espaces d’indentation.'
      },
      {
        term: 'Modèle YANG',
        simple: 'Le "plan de construction" standardisé d’une configuration réseau : il définit exactement quels champs existent sur une interface (nom, IP, masque) et quel type de valeur est autorisé.'
      },
      {
        term: 'NETCONF (Port TCP 830)',
        simple: 'Protocole d’automatisation qui passe par SSH (port 830) et utilise obligatoirement le format XML pour lire ou modifier la configuration d’un routeur selon un modèle YANG.'
      },
      {
        term: 'RESTCONF (Port TCP 443)',
        simple: 'La version Web moderne de NETCONF : elle passe par HTTPS (port 443), utilise les actions Web classiques (GET, POST, PUT, PATCH, DELETE) et parle en JSON ou en XML.'
      },
      {
        term: 'Agentless (Sans agent) vs Agent-based',
        simple: 'Un outil "Agentless" (comme Ansible) se connecte au routeur par SSH sans rien installer dessus. Un outil "Agent-based" (comme Puppet ou Chef) nécessite un logiciel installé sur l’équipement.'
      },
      {
        term: 'Modèle Push vs Modèle Pull',
        simple: 'En mode "Push" (Ansible), c’est le serveur central qui envoie la configuration vers le routeur. En mode "Pull" (Puppet/Chef), c’est le routeur qui vient régulièrement demander sa config au serveur.'
      }
    ],
    interactiveType: 'programmability-sim',
    interactiveTitle: 'Schéma Interactif : Comparer NETCONF / RESTCONF / gNMI & Voir la même interface en JSON, YAML et XML',
    sections: [
      {
        id: 'prog-netconf-restconf',
        tag: 'Notions 1 & 2',
        title: '1. YANG, NETCONF (SSH 830) et RESTCONF (HTTPS 443)',
        idea: 'YANG décrit la structure des données ; NETCONF et RESTCONF sont les deux messagers qui transportent ces données vers le routeur.',
        points: [
          '<strong>Reconnaître le format au premier coup d’œil</strong> : <strong>JSON</strong> = <code>{ "clé": ["liste"] }</code> • <strong>XML</strong> = <code>&lt;balise&gt;valeur&lt;/balise&gt;</code> • <strong>YAML</strong> = commence par <code>---</code> avec alignement par espaces et tirets <code>-</code>.',
          '<strong>Opérations NETCONF (en XML sur SSH 830)</strong> : <code>&lt;get-config&gt;</code> (lire la config seule), <code>&lt;get&gt;</code> (lire la config + l’état en direct), <code>&lt;edit-config&gt;</code> (modifier la config), <code>&lt;lock&gt;</code> (verrouiller la config pendant la modification).',
          '<strong>Opérations RESTCONF (en JSON/XML sur HTTPS 443)</strong> : <strong>GET</strong> = lire • <strong>POST</strong> = créer • <strong>PUT</strong> = remplacer entièrement • <strong>PATCH</strong> = modifier partiellement • <strong>DELETE</strong> = supprimer.'
        ],
        table: {
          headers: ['Action voulue', 'Commande NETCONF (SSH 830 • XML)', 'Méthode HTTP RESTCONF (HTTPS 443 • JSON/XML)'],
          rows: [
            ['Lire la configuration', '<get-config> (ou <get>)', 'GET'],
            ['Créer un nouvel élément', '<edit-config> (create)', 'POST'],
            ['Remplacer ou Modifier', '<edit-config> (replace / merge)', 'PUT (remplacer) / PATCH (fusionner)'],
            ['Supprimer un élément', '<edit-config> (delete)', 'DELETE']
          ]
        }
      },
      {
        id: 'prog-tools',
        tag: 'Notion 3',
        title: '2. Comparer Ansible, Puppet, Chef et SaltStack',
        idea: 'Dans les questions d’examen, on vous demande presque toujours lequel n’a pas besoin d’agent (Ansible), lequel pousse (Push) ou tire (Pull), et quel langage de fichier il utilise.',
        points: [
          '<strong>Ansible</strong> : le favori en réseau Cisco car il est <strong>Agentless</strong> (utilise simplement SSH/NETCONF), fonctionne en mode <strong>Push</strong> et utilise des <strong>Playbooks en YAML</strong>.',
          '<strong>Puppet & Chef</strong> : utilisent un <strong>Agent</strong>, fonctionnent en mode <strong>Pull</strong> et s’écrivent en <strong>Ruby</strong> (<em>Manifests</em> pour Puppet, <em>Recipes/Cookbooks</em> pour Chef).',
          '<strong>SaltStack</strong> : très rapide, fonctionne avec agent (<em>Minion</em>) ou sans agent (<em>salt-ssh</em>), supporte Push & Pull et utilise des fichiers en <strong>YAML</strong>.'
        ],
        table: {
          headers: ['Outil', 'Besoin d’un Agent ?', 'Sens (Push / Pull)', 'Langage des fichiers', 'Nom des fichiers'],
          rows: [
            ['Ansible', '✅ Non (Agentless via SSH)', 'Push', 'YAML', 'Playbooks'],
            ['Puppet', 'Oui (Agent / Proxy)', 'Pull (TCP 8140)', 'Ruby', 'Manifests'],
            ['Chef', 'Oui (Chef Client)', 'Pull', 'Ruby', 'Recipes / Cookbooks'],
            ['SaltStack', 'Optionnel (Minion ou SSH)', 'Push & Pull', 'YAML', 'SLS (Salt State)']
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 6 : SOFTWARE-DEFINED NETWORKING (MODULES 23 - 26)
  // ===========================================================================
  'ccnp-encor-v9-sdn': {
    courseId: 'ccnp-encor-v9-sdn',
    badge: 'Fiche de Cours • Modules 23 à 26',
    title: 'Réseau Piloté par Logiciel (SDN, SD-Access & SD-WAN)',
    intro: 'Le SDN centralise l’intelligence du réseau dans un contrôleur (comme Cisco Catalyst Center). Ce module couvre le réseau de campus automatisé (SD-Access) et le réseau étendu inter-sites (SD-WAN).',
    definitions: [
      {
        term: 'Underlay vs Overlay',
        simple: 'L’Underlay est le réseau physique réel (les câbles et routeurs qui transportent les paquets IP). L’Overlay est le réseau virtuel de tunnels créé par-dessus pour déplacer les utilisateurs librement.'
      },
      {
        term: 'LISP (EID vs RLOC en SD-Access)',
        simple: 'En SD-Access, LISP sépare "QUI tu es" (EID = l’adresse IP de ton PC) de "OÙ tu es branché" (RLOC = l’adresse IP du switch sur lequel tu es connecté). Tu peux changer de bâtiment sans changer d’IP !'
      },
      {
        term: 'VXLAN (Port UDP 4789)',
        simple: 'Le tunnel utilisé en SD-Access pour transporter les trames des utilisateurs d’un switch à un autre par-dessus le réseau IP, tout en incluant leur étiquette de sécurité (SGT).'
      },
      {
        term: 'SGT (Scalable Group Tag / TrustSec)',
        simple: 'Un badge de sécurité (ex: "Employé" ou "Imprimante") attribué par Cisco ISE. Les règles de pare-feu s’appliquent entre badges SGT au lieu de dépendre des adresses IP.'
      },
      {
        term: 'vBond, vManage, vSmart (Cisco SD-WAN)',
        simple: 'Les 3 cerveaux du SD-WAN : vBond accueille et authentifie les nouveaux routeurs, vManage est l’écran de contrôle graphique, et vSmart distribue les routes à tout le monde via le protocole OMP.'
      },
      {
        term: 'Northbound API vs Southbound API',
        simple: 'Southbound = comment le contrôleur parle aux routeurs en dessous de lui (NETCONF, SSH, SNMP). Northbound = comment un script Python ou une application parle au contrôleur au-dessus (API REST).'
      }
    ],
    interactiveType: 'sdn-sim',
    interactiveTitle: 'Schéma Interactif : Rôles de la Fabric Cisco SD-Access & Les 4 Plans de Cisco Catalyst SD-WAN',
    sections: [
      {
        id: 'sdn-sda',
        tag: 'Notions 1 & 2',
        title: '1. Cisco SD-Access (Campus) : LISP + VXLAN + TrustSec',
        idea: 'En SD-Access, chaque technologie a un rôle unique qu’il faut savoir associer dans les questions de type "Match".',
        points: [
          '<strong>La formule magique de SD-Access</strong> : <strong>Control Plane = LISP</strong> (trouve sur quel switch est connecté un PC) + <strong>Data Plane = VXLAN</strong> (transporte le paquet sur UDP 4789) + <strong>Policy Plane = Cisco ISE / TrustSec SGT</strong> (applique les droits de sécurité).',
          '<strong>Les 3 rôles de switches dans la Fabric SD-Access</strong> :<ul><li><strong>Edge Node</strong> : le switch d’accès où l’on branche les PC et bornes Wi-Fi.</li><li><strong>Control Plane Node</strong> : l’annuaire LISP qui retient quel PC (EID) est sur quel Edge Node (RLOC).</li><li><strong>Border Node</strong> : la porte de sortie qui relie la Fabric SD-Access vers Internet ou le reste de l’entreprise.</li></ul>'
        ]
      },
      {
        id: 'sdn-sdwan-api',
        tag: 'Notions 3 & 4',
        title: '2. Cisco Catalyst SD-WAN (Les 4 Plans) & Codes des APIs REST',
        idea: 'En SD-WAN, chaque composant appartient à un plan précis (Orchestration, Management, Control, Data) et le protocole de routage central s’appelle OMP.',
        points: [
          '<strong>Protocole OMP (Overlay Management Protocol)</strong> : tourne entre le contrôleur <strong>vSmart</strong> et les routeurs <strong>WAN Edge</strong> pour échanger les routes, les clés IPsec et les politiques.',
          '<strong>Codes de réponse HTTP d’une API REST</strong> : <strong>200 OK / 201 Created</strong> = Succès • <strong>400</strong> = Requête mal écrite • <strong>401 Unauthorized</strong> = Non connecté (mot de passe/token manquant) • <strong>403 Forbidden</strong> = Connecté mais droits insuffisants • <strong>404</strong> = Introuvable • <strong>500</strong> = Panne du serveur.'
        ],
        table: {
          headers: ['Composant SD-WAN', 'Son Plan', 'Son Rôle en 1 phrase'],
          rows: [
            ['vBond (Validator)', 'Orchestration Plane', 'Authentifie les équipements au démarrage (ZTP) et gère la traversée du NAT (IP publique obligatoire).'],
            ['vManage (Manager)', 'Management Plane', 'L’interface graphique (GUI) où l’administrateur crée les configurations et surveille le réseau.'],
            ['vSmart (Controller)', 'Control Plane', 'Le cerveau qui distribue les routes et politiques via OMP (ne transporte jamais les données utilisateurs).'],
            ['WAN Edge (cEdge / vEdge)', 'Data Plane', 'Les routeurs des sites qui transportent le trafic des utilisateurs dans des tunnels IPsec surveillés par BFD.']
          ]
        }
      }
    ]
  },

  // ===========================================================================
  // FINAL EXAM : CCNP ENCOR V9 (350-401)
  // ===========================================================================
  'ccnp-encor-v9-final': {
    courseId: 'ccnp-encor-v9-final',
    badge: 'Aide-Mémoire • Final Exam ENCOR v9',
    title: 'L’Essentiel du Final Exam — CCNP ENCOR v9',
    intro: 'Cet aide-mémoire regroupe les valeurs clés, ports et règles de départage à avoir en tête juste avant de lancer le Mode Examen Final de 60 questions.',
    definitions: [
      {
        term: 'RSTP & EtherChannel (Switching)',
        simple: 'RSTP utilise 3 états (Discarding, Learning, Forwarding). LACP utilise Active/Passive, PAgP utilise Desirable/Auto (2 modes passifs/auto ensemble ne forment jamais de lien).'
      },
      {
        term: 'HSRP vs VRRP vs GLBP (Passerelles)',
        simple: 'HSRP (Cisco, Active/Standby, Preempt OFF). VRRP (Standard, Master/Backup, Preempt ON). GLBP (Cisco, 1 AVG + 4 AVF, équilibrage de charge actif-actif).'
      },
      {
        term: 'OSPF & BGP (Routing)',
        simple: 'OSPF préfère : Intra-Area (O) > Inter-Area (O IA) > Externe E1/N1 > E2/N2. BGP choisit selon : 1. Weight (+ grand) > 2. Local Pref (+ grand) > 3. Local > 4. AS_PATH (+ court).'
      },
      {
        term: 'TACACS+ vs RADIUS (Sécurité)',
        simple: 'TACACS+ = TCP 49, chiffre tout le paquet, contrôle les commandes des admins. RADIUS = UDP 1812/1813, chiffre le mot de passe seul, gère l’accès réseau 802.1X / Wi-Fi.'
      },
      {
        term: 'GRE over IPsec & Syslog (Services)',
        simple: 'GRE (IP 47) permet le Multicast/OSPF mais sans chiffrer ; IPsec chiffre le tunnel GRE. Syslog va de 0 (Emergencies, le plus grave) à 7 (Debugging).'
      },
      {
        term: 'NETCONF, RESTCONF, SD-Access & SD-WAN',
        simple: 'NETCONF = SSH 830 (XML). RESTCONF = HTTPS 443 (JSON/XML). Ansible = Agentless (YAML). SD-Access = LISP + VXLAN + SGT. SD-WAN = vBond + vManage + vSmart (OMP) + WAN Edge.'
      }
    ],
    interactiveType: 'ccnp-final-sim',
    interactiveTitle: 'Tableaux Interactifs : Distances Administratives, Adresses Multicast & Ports Cisco',
    sections: [
      {
        id: 'final-recap',
        tag: 'Récapitulatif Express',
        title: 'Les 5 Règles d’Or pour ne tomber dans aucun piège au Final Exam',
        idea: 'En cas d’hésitation sur une question du Final Exam, vérifiez toujours ces 5 points :',
        points: [
          '<strong>1. Table de routage</strong> : pour acheminer un paquet, le masque le plus précis (ex: <code>/26</code> contre <code>/24</code>) gagne TOUJOURS avant même de regarder la Distance Administrative.',
          '<strong>2. Sécurité Layer 2</strong> : <strong>DHCP Snooping</strong> doit être activé en premier car c’est lui qui crée la table (MAC + IP + Port) utilisée par <strong>DAI</strong> (anti-ARP spoofing) et <strong>IP Source Guard</strong>.',
          '<strong>3. Tunnels & Monitoring</strong> : si l’énoncé demande d’envoyer une copie complète des paquets (SPAN) à travers plusieurs routeurs Layer 3, la réponse est <strong>ERSPAN</strong> (qui utilise une encapsulation GRE).',
          '<strong>4. Automatisation</strong> : si l’on cherche un outil <strong>sans agent (Agentless)</strong> en mode <strong>Push</strong> utilisant <strong>SSH</strong> et des fichiers <strong>YAML</strong>, c’est toujours <strong>Ansible</strong>.',
          '<strong>5. SDN</strong> : dans SD-Access, <strong>LISP</strong> gère le Control Plane (EID → RLOC) et <strong>VXLAN</strong> le Data Plane. Dans SD-WAN, seul <strong>vSmart</strong> parle <strong>OMP</strong> pour le Control Plane et seul <strong>vBond</strong> orchestre la connexion initiale.'
        ]
      }
    ]
  },

  // ===========================================================================
  // FINAL EXAM : CCNA 1 V7.0 — INTRODUCTION TO NETWORKS (ITN)
  // ===========================================================================
  'ccna-1-v7-final': {
    courseId: 'ccna-1-v7-final',
    badge: 'Fiche de Cours • CCNA 1 v7.0 (ITN)',
    title: 'Comprendre les Fondamentaux Réseaux — CCNA 1',
    intro: 'Cette fiche résume simplement tout ce qu’il faut comprendre pour réussir le CCNA 1 : le rôle des 7 couches OSI, comment voyagent les adresses MAC et IP, comment calculer un sous-réseau en 10 secondes et comment fonctionne IPv6.',
    definitions: [
      {
        term: 'Adresse MAC (Couche 2 — Physique)',
        simple: 'La carte d’identité physique gravée sur la carte réseau (ex: 00-00-0C-94-36-AB). Elle ne sert qu’à aller d’un appareil au suivant sur le MÊME câble/réseau local et change à chaque routeur traversé.'
      },
      {
        term: 'Adresse IP (Couche 3 — Logique)',
        simple: 'L’adresse postale finale du destinataire (ex: 192.168.1.10). Contrairement à l’adresse MAC, l’adresse IP Source et Destination reste la MÊME du début à la fin du voyage à travers les routeurs.'
      },
      {
        term: 'Protocole ARP',
        simple: 'La question criée à tout le réseau local (en Broadcast) : "Qui possède telle adresse IP ? Donne-moi ton adresse MAC !". Si le destinataire est sur un autre réseau, le PC demande la MAC de sa passerelle (le routeur).'
      },
      {
        term: 'Passerelle par défaut (Default Gateway)',
        simple: 'L’adresse IP du routeur local : c’est la porte de sortie obligatoire dès qu’un PC veut parler à une machine située en dehors de son propre sous-réseau.'
      },
      {
        term: 'Masque & Préfixe (/24, /26, /30...)',
        simple: 'Indique quelle partie de l’adresse IP désigne le Réseau (les bits à 1) et quelle partie désigne les Machines/Hôtes (les bits à 0). Plus le chiffre après le "/" est grand, plus le sous-réseau est petit.'
      },
      {
        term: 'IPv6 GUA (2000::/3) vs Link-Local (FE80::/10)',
        simple: 'En IPv6, une adresse GUA (commence par 2 ou 3) est publique et va sur Internet. Une adresse Link-Local (commence par FE80) est obligatoire sur chaque carte réseau mais ne sort jamais du lien local.'
      },
      {
        term: 'TCP vs UDP (Couche 4 — Transport)',
        simple: 'TCP est le courrier recommandé avec accusé de réception (fiable, numéroté, mais plus lourd : Web, Mail, SSH). UDP est l’envoi direct sans vérification pour aller très vite (VoIP, Vidéo, DNS, DHCP).'
      },
      {
        term: 'SVI (interface VLAN 1 sur un Switch)',
        simple: 'Un switch n’a pas besoin d’adresse IP pour faire circuler les trames des PC. On lui met une IP sur son interface virtuelle "VLAN 1" uniquement pour pouvoir s’y connecter à distance en SSH.'
      }
    ],
    interactiveType: 'ccna1-sim',
    interactiveTitle: 'Atelier Interactif : Explorer les 7 Couches OSI & Calculer un Sous-Réseau IPv4 (/24 à /30)',
    sections: [
      {
        id: 'ccna1-osi-mac-ip',
        tag: 'Notions 1 & 2',
        title: '1. Les 7 Couches OSI, Commutation Switch et le Voyage d’un Paquet (MAC vs IP)',
        idea: 'À chaque couche du modèle OSI, les données prennent un nom précis (PDU). Et lorsqu’un paquet traverse un routeur, seules les adresses MAC changent !',
        points: [
          '<strong>Le nom des données (PDU) à chaque couche</strong> : Couches 7-6-5 (Application) = <strong>Données</strong> → Couche 4 (Transport) = <strong>Segment</strong> (TCP) / <strong>Datagramme</strong> (UDP) → Couche 3 (Réseau) = <strong>Paquet</strong> → Couche 2 (Liaison) = <strong>Trame</strong> → Couche 1 (Physique) = <strong>Bits</strong>.',
          '<strong>Que se passe-t-il quand le PC A envoie un fichier au Serveur B situé derrière un routeur ?</strong><ul><li>L’<strong>IP Source</strong> (PC A) et l’<strong>IP Destination</strong> (Serveur B) <strong>ne changent pas</strong>.</li><li>Mais dans la trame Ethernet envoyée par le PC A, l’<strong>adresse MAC Destination est celle du Routeur (Default Gateway)</strong> !</li></ul>',
          '<strong>Les 2 méthodes d’un Switch</strong> : <strong>Store-and-Forward</strong> (reçoit toute la trame et vérifie le CRC pour éliminer 100% des erreurs) vs <strong>Cut-Through</strong> (envoie tout de suite dès lecture de la MAC destination : latence minimale mais peut laisser passer des trames abîmées ou <em>runts</em>).'
        ],
        tip: 'Question piège très fréquente au CCNA 1 : "Aucune entrée n’est dans le cache ARP et le PC veut joindre un serveur distant, que fait-il ?". Réponse : il envoie une requête ARP pour obtenir l’adresse MAC de sa PASSERELLE PAR DÉFAUT (jamais celle du serveur distant).'
      },
      {
        id: 'ccna1-subnet-ipv6',
        tag: 'Notions 3 & 4',
        title: '2. Calculer un Sous-Réseau IPv4 facilement & Comprendre IPv6',
        idea: 'En IPv4, on retire toujours 2 adresses par sous-réseau (l’adresse Réseau et l’adresse de Broadcast). En IPv6, le Broadcast n’existe plus (remplacé par le Multicast FF00::/8).',
        points: [
          '<strong>Adresses IPv4 Privées (non routables sur Internet)</strong> : <code>10.0.0.0/8</code> • <code>172.16.0.0</code> à <code>172.31.255.255</code> • <code>192.168.0.0/16</code>. (<code>169.254.x.x</code> = adresse APIPA quand le serveur DHCP ne répond pas ; <code>127.0.0.1</code> = Loopback).',
          '<strong>Compresser une adresse IPv6</strong> : 1) On enlève les zéros au début de chaque bloc (<code>0db8</code> → <code>db8</code>). 2) On peut remplacer une suite de blocs de zéros par <strong><code>::</code> une seule fois</strong> dans l’adresse.',
          '<strong>Obtenir une adresse IPv6 automatiquement (SLAAC)</strong> : le routeur envoie un message <strong>ICMPv6 RA (Router Advertisement)</strong> qui donne le préfixe <code>/64</code> au PC. Et les messages <strong>NS / NA (Neighbor Solicitation / Advertisement)</strong> remplacent l’ARP en IPv6 !'
        ],
        table: {
          headers: ['Préfixe', 'Masque de sous-réseau', 'Total d’adresses (Pas)', 'Hôtes utilisables (-2)', 'Exemple en question d’examen'],
          rows: [
            ['/25', '255.255.255.128', '128', '126 machines', 'Pour un réseau de 70 à 120 hôtes'],
            ['/26', '255.255.255.192', '64', '62 machines', 'Pour un réseau de 35 à 60 hôtes'],
            ['/27', '255.255.255.224', '32', '30 machines', 'Pour un réseau de 15 à 30 hôtes'],
            ['/28', '255.255.255.240', '16', '14 machines', 'Pour un petit réseau de 10 hôtes'],
            ['/29', '255.255.255.248', '8', '6 machines', '1er hôte = +1 | Dernier hôte = +6 | Broadcast = +7'],
            ['/30', '255.255.255.252', '4', '2 machines', 'Lien point-à-point entre 2 routeurs']
          ]
        }
      },
      {
        id: 'ccna1-ports-ios',
        tag: 'Notion 5',
        title: '3. Ports TCP / UDP & Commandes Cisco IOS à connaître',
        idea: 'Savoir associer chaque numéro de port à son service (ex: 53 = DNS, 22 = SSH) et connaître les commandes de base pour sécuriser un switch ou un routeur.',
        points: [
          '<strong>Les ports qui tombent au CCNA 1</strong> : <strong>20/21</strong> = FTP • <strong>22</strong> = SSH (sécurisé) • <strong>23</strong> = Telnet (en clair) • <strong>25</strong> = SMTP (envoi mail) • <strong>53</strong> = DNS (noms → IP, utilise TCP et UDP) • <strong>67/68</strong> = DHCP • <strong>69</strong> = TFTP • <strong>80/443</strong> = HTTP/HTTPS • <strong>110</strong> = POP3 • <strong>143</strong> = IMAP.',
          '<strong>Commandes de sécurité IOS</strong> : <code>enable secret</code> (protège le mode privilégié avec chiffrement fort), <code>service password-encryption</code> (masque les mots de passe en clair dans <code>show running-config</code>), <code>transport input ssh</code> sous <code>line vty 0 15</code> (autorise uniquement SSH à distance).'
        ]
      }
    ]
  }
};
