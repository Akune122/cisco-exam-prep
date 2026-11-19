/**
 * Fiches de Cours Complètes & Données des Schémas Interactifs
 * Basées sur les questions officielles des Checkpoints / Final Exams et le programme Cisco (CCNP ENCOR v9 & CCNA 1 v7.0)
 */

window.__STUDY_GUIDES__ = {
  // ===========================================================================
  // CHECKPOINT 1 : NETWORK SWITCHING (MODULES 1 - 7)
  // ===========================================================================
  'ccnp-encor-v9-switching': {
    courseId: 'ccnp-encor-v9-switching',
    badge: 'Cours Complet • Modules 1 à 7',
    title: 'Commutation Réseau (Network Switching)',
    subtitle: 'Architecture Campus, CEF/TCAM, VLANs & Trunks 802.1Q, STP/RSTP/MSTP, EtherChannel (LACP/PAgP), FHRP (HSRP/VRRP/GLBP) & WLAN.',
    readingTime: '20 min',
    interactiveType: 'switching-sim',
    interactiveTitle: 'Simulateur Interactif : Négociation EtherChannel (LACP / PAgP) & Redondance FHRP (HSRP / VRRP / GLBP)',
    keyNumbers: [
      { label: 'Priorité STP par défaut', value: '32768', note: 'Incréments de 4096 (System ID Extension = VLAN ID)' },
      { label: 'Multicast HSRP v1 / v2', value: '224.0.0.2 / .102', note: 'UDP 1985 (v1) • MAC 0000.0c07.acXX / 0000.0c9f.fXXX' },
      { label: 'Multicast VRRP / GLBP', value: '224.0.0.18 / .102', note: 'VRRP = IP proto 112 • GLBP = UDP 3222 (jusqu’à 4 AVF)' },
      { label: 'Max liens EtherChannel', value: '8 actifs', note: 'LACP supporte 8 actifs + 8 en veille (hot-standby)' }
    ],
    sections: [
      {
        id: 'sw-arch-cef',
        tag: 'Modules 1 & 2',
        title: '1. Architecture Campus, Méthodes de Commutation & CEF / TCAM',
        summary: 'Comprendre la hiérarchie Campus Cisco, la différence entre Process Switching, Fast Switching et CEF, ainsi que le fonctionnement matériel des tables CAM et TCAM.',
        bullets: [
          '<strong>Modèle Campus 3-Tier (3 couches)</strong> : <ul><li><strong>Access Layer</strong> : connexion des terminaux, PoE, Port Security, 802.1X, DHCP Snooping, QoS Marking/Classification.</li><li><strong>Distribution Layer</strong> : frontière Couche 2 / Couche 3, agrégation des liens, routage inter-VLAN, FHRP (HSRP/VRRP/GLBP), filtrage ACL, résumé de routes.</li><li><strong>Core Layer</strong> : backbone haute vitesse, commutation L3 ultra-rapide, aucune ACL ni traitement lourd qui ralentirait les paquets.</li><li><strong>Collapsed Core (2-Tier)</strong> : fusionne Distribution et Core pour les réseaux de taille moyenne.</li></ul>',
          '<strong>Les 3 mécanismes de transfert Cisco (du plus lent au plus rapide)</strong> : <ul><li><strong>Process Switching</strong> : chaque paquet est traité par le CPU principal (Control Plane). Le recalcul du CRC et la recherche dans la RIB sont faits en logiciel pour chaque paquet.</li><li><strong>Fast Switching</strong> : le <em>premier paquet</em> d’un flux passe par le CPU pour créer une entrée dans le cache de flux (Route Cache), les paquets suivants du même flux utilisent ce cache.</li><li><strong>CEF (Cisco Express Forwarding)</strong> : activé par défaut (<code>ip cef</code>). Pré-construit deux tables en matériel (Data Plane ASIC) avant même l’arrivée du trafic : la <strong>FIB (Forwarding Information Base)</strong>, miroir de la table de routage IP, et l’<strong>Adjacency Table</strong>, qui contient les en-têtes L2 pré-calculés (adresses MAC issues d’ARP) pour réécrire la trame instantanément.</li></ul>',
          '<strong>CAM vs TCAM (VMR) & SDM Templates</strong> : <ul><li><strong>Table CAM</strong> : recherche binaire exacte (0 ou 1) utilisée pour la table d’adresses MAC (Source MAC apprise sur le port + VLAN + timer de <strong>300 secondes</strong> par défaut).</li><li><strong>Table TCAM (Ternary Content Addressable Memory)</strong> : évalue trois états — <code>0</code>, <code>1</code> et <code>X</code> (<em>Don’t Care</em>) en un seul cycle d’horloge. Utilise l’architecture <strong>VMR (Value, Mask, Result)</strong> pour les ACLs, la QoS et le routage L3.</li><li><strong>SDM (Switching Database Manager)</strong> : permet de répartir les ressources TCAM selon le rôle du switch (<code>sdm prefer</code>). <strong>Attention</strong> : changer de template SDM nécessite obligatoirement un <strong>redémarrage (reload)</strong> du switch !</li></ul>'
        ],
        cli: `! Vérifier la table MAC et le timer de vieillissement (300s par défaut)
Switch# show mac address-table
Switch# show mac address-table aging-time

! Vérifier la FIB et l'Adjacency Table de CEF
Switch# show ip cef
Switch# show adjacency detail

! Vérifier le template SDM d'allocation TCAM
Switch# show sdm prefer`,
        examTip: 'Piège fréquent à l’examen : une entrée d’adresses MAC dans la table CAM est apprise à partir de l’adresse MAC SOURCE de la trame entrante (jamais la destination), et le switch inonde (flood) les trames Unicast inconnues, Broadcast et Multicast sur tous les ports du même VLAN sauf le port d’origine.'
      },
      {
        id: 'sw-vlan-trunk',
        tag: 'Module 3',
        title: '2. VLANs, Trunks IEEE 802.1Q, Native VLAN & DTP / VTP',
        summary: 'Segmentation logique de niveau 2, étiquetage de trame 802.1Q (4 octets), négociation automatique de Trunk avec DTP et synchronisation VTP.',
        bullets: [
          '<strong>Plages de VLANs</strong> : <ul><li><strong>Normal Range (1 – 1005)</strong> : stockés dans <code>vlan.dat</code> en mémoire Flash. Les VLANs 1, 1002–1005 sont créés par défaut et ne peuvent pas être supprimés.</li><li><strong>Extended Range (1006 – 4094)</strong> : supportés uniquement en mode <strong>VTP Transparent</strong> (en VTPv1/v2) ou en <strong>VTPv3</strong>.En VTPv1/v2 Transparent, ils sont enregistrés dans la <code>running-config</code>.</li></ul>',
          '<strong>Tagging IEEE 802.1Q</strong> : insère un champ de <strong>4 octets</strong> dans l’en-tête Ethernet (TPID <code>0x8100</code> + Priority PCP 3 bits pour la CoS 802.1p + CFI/DEI 1 bit + VLAN ID 12 bits) et impose le <strong>recalcul du FCS (CRC)</strong>.',
          '<strong>Native VLAN</strong> : VLAN dont les trames circulent <strong>sans étiquette (untagged)</strong> sur un lien Trunk 802.1Q (par défaut VLAN 1). Les deux extrémités du Trunk doivent avoir le même Native VLAN (sinon alerte CDP <em>Native VLAN mismatch</em> et risque de fusion de domaines de broadcast). Pour tagger aussi le VLAN natif : <code>vlan dot1q tag native</code>.',
          '<strong>DTP (Dynamic Trunking Protocol)</strong> : protocole propriétaire Cisco qui négocie automatiquement l’état Trunk :<ul><li><code>dynamic desirable</code> : initie activement la négociation Trunk (forme un Trunk avec <em>trunk</em>, <em>desirable</em> ou <em>auto</em>).</li><li><code>dynamic auto</code> : attend passivement (⚠️ <strong>Auto + Auto = Access !</strong> Aucun Trunk ne se forme).</li><li>Bonne pratique sécurité : forcer <code>switchport mode access</code> ou <code>switchport mode trunk</code> et désactiver DTP avec <code>switchport nonegotiate</code>.</li></ul>',
          '<strong>VTP (VLAN Trunking Protocol)</strong> : <strong>VTPv3</strong> apporte la prise en charge des VLANs étendus (1006–4094), des Private VLANs (PVLAN), la protection par serveur primaire (<code>vtp primary</code>) évitant l’écrasement accidentel de la base VLAN par un numéro de révision supérieur, et l’authentification cachée.'
        ],
        table: {
          headers: ['Port Switch A (DTP)', 'Dynamic Auto', 'Dynamic Desirable', 'Trunk (Statique)', 'Access (Statique)'],
          rows: [
            ['Dynamic Auto', '❌ Access', '✅ Trunk', '✅ Trunk', '❌ Access'],
            ['Dynamic Desirable', '✅ Trunk', '✅ Trunk', '✅ Trunk', '❌ Access'],
            ['Trunk (Statique)', '✅ Trunk', '✅ Trunk', '✅ Trunk', '⚠️ Conflit (Limité)'],
            ['Access (Statique)', '❌ Access', '❌ Access', '⚠️ Conflit (Limité)', '❌ Access']
          ]
        },
        cli: `! Configuration recommandée d'un port Trunk sécurisé
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# switchport trunk allowed vlan 10,20,30
Switch(config-if)# switchport nonegotiate`
      },
      {
        id: 'sw-stp',
        tag: 'Module 4',
        title: '3. Spanning Tree Protocol : STP (802.1D), RSTP (802.1w) & MSTP (802.1s)',
        summary: 'Élection du Root Bridge, rôles et états des ports, convergence rapide RSTP, regroupement d’instances MSTP et mécanismes de protection STP Toolkit.',
        bullets: [
          '<strong>Élection du Root Bridge & Rôles de Ports</strong> :<ul><li>Le switch avec le <strong>plus petit Bridge ID</strong> (Priorité + System ID Extension [VLAN ID] + Adresse MAC) devient le <strong>Root Bridge</strong>. Tous ses ports sont <strong>Designated Ports (DP)</strong> (en Forwarding).</li><li>Sur chaque switch non-Root, <strong>un seul Root Port (RP)</strong> est élu selon : 1) Plus faible <strong>Root Path Cost</strong> cumulé vers le Root → 2) Plus petit <strong>Sender Bridge ID</strong> du voisin → 3) Plus petit <strong>Sender Port ID</strong> (Priorité de port + numéro du port DU VOISIN).</li></ul>',
          '<strong>STP 802.1D vs RSTP 802.1w (Rapid PVST+)</strong> :<ul><li><strong>États STP (802.1D)</strong> : <code>Disabled</code> → <code>Blocking</code> (20s Max Age) → <code>Listening</code> (15s Forward Delay) → <code>Learning</code> (15s Forward Delay) → <code>Forwarding</code> (total jusqu’à 50 secondes).</li><li><strong>États RSTP (802.1w)</strong> : fusionne Disabled, Blocking et Listening en un seul état <strong>Discarding</strong>, suivi de <strong>Learning</strong> puis <strong>Forwarding</strong>. Convergence en moins d’une seconde grâce au mécanisme <em>Proposal / Agreement</em> (synchronisation sur liens point-to-point full-duplex).</li><li><strong>Rôles RSTP</strong> : <code>Root Port</code>, <code>Designated Port</code>, <code>Alternate Port</code> (chemin de secours vers le Root Bridge, équivalent d’UplinkFast) et <code>Backup Port</code> (port redondant sur un même segment partagé/hub).</li><li>En RSTP, <strong>tous les switches génèrent des BPDUs toutes les 2 secondes (Hello Time)</strong>. Si <strong>3 BPDUs consécutifs (6 secondes)</strong> sont manqués, le voisin est déclaré mort immédiatement.</li></ul>',
          '<strong>MSTP (IEEE 802.1s)</strong> : associe plusieurs VLANs à un nombre réduit d’instances Spanning Tree (ex: Instance 1 pour VLANs 10–20, Instance 2 pour VLANs 30–40). Pour que deux switches soient dans la <strong>même région MST</strong>, ils doivent partager exactement : 1) le <strong>Nom de configuration</strong>, 2) le <strong>Numéro de révision</strong>, et 3) la <strong>table de correspondance VLAN-vers-Instance</strong>.',
          '<strong>STP Protection Toolkit</strong> :<ul><li><strong>PortFast</strong> : fait passer immédiatement un port d’accès en <em>Forwarding</em> et empêche la génération de TCN (Topology Change Notification).</li><li><strong>BPDU Guard</strong> : place immédiatement le port en état <strong>err-disabled</strong> s’il reçoit un BPDU (à activer sur les ports PortFast orientés utilisateurs).</li><li><strong>Root Guard</strong> : empêche un port de devenir Root Port. S’il reçoit un BPDU supérieur, le port passe en <strong>root-inconsistent</strong> (aucun trafic transmis tant que les BPDUs supérieurs continuent).</li><li><strong>Loop Guard</strong> : protège contre les pannes de liens unidirectionnels sur les ports Non-Designated en les plaçant en <strong>loop-inconsistent</strong> si les BPDUs cessent d’arriver (alternative matérielle complémentaire : <strong>UDLD Aggressive</strong>).</li></ul>'
        ],
        table: {
          headers: ['État 802.1D (STP)', 'État 802.1w (RSTP)', 'Apprend les MAC ?', 'Transmet les trames Data ?'],
          rows: [
            ['Disabled / Blocking / Listening', 'Discarding', 'Non', 'Non'],
            ['Learning (15s)', 'Learning', 'Oui', 'Non'],
            ['Forwarding', 'Forwarding', 'Oui', 'Oui']
          ]
        },
        cli: `! Activer Rapid-PVST+ ou MST et forcer le Root Bridge primaire/secondaire
Switch(config)# spanning-tree mode rapid-pvst
Switch(config)# spanning-tree vlan 10,20 root primary
Switch(config)# spanning-tree vlan 30,40 root secondary

! Activer PortFast et BPDU Guard par défaut sur tous les ports d'accès
Switch(config)# spanning-tree portfast default
Switch(config)# spanning-tree portfast bpduguard default`
      },
      {
        id: 'sw-etherchannel',
        tag: 'Module 5',
        title: '4. Agrégation de Liens : EtherChannel (LACP & PAgP)',
        summary: 'Regrouper jusqu’à 8 liens physiques en une seule interface logique Port-Channel pour augmenter la bande passante et la résilience sans bloquer via STP.',
        bullets: [
          '<strong>Protocoles de négociation EtherChannel</strong> :<ul><li><strong>LACP (IEEE 802.3ad / 802.1AX)</strong> : standard ouvert. Modes : <code>active</code> (initie la négociation) et <code>passive</code> (écoute). Supporte jusqu’à 16 liens configurés (8 actifs + 8 en <em>hot-standby</em>).</li><li><strong>PAgP (Port Aggregation Protocol)</strong> : propriétaire Cisco. Modes : <code>desirable</code> (initie) et <code>auto</code> (écoute). Supporte jusqu’à 8 liens.</li><li><strong>Mode <code>on</code> (Statique)</strong> : force le regroupement sans aucun protocole de négociation. ⚠️ Les deux côtés doivent être en mode <code>on</code> (<code>on</code> + <code>active</code> ou <code>desirable</code> ne forme PAS de canal et crée des boucles ou erreurs STP !).</li></ul>',
          '<strong>Conditions strictes de compatibilité entre tous les ports membres</strong> : même vitesse, même mode duplex, même mode (Access avec le même VLAN, ou Trunk avec la même encapsulation, le même Native VLAN et la même liste de VLANs autorisés), et mêmes paramètres STP.',
          '<strong>Équilibrage de charge (Load-Balancing)</strong> : basé sur un <strong>algorithme de hachage XOR déterministe</strong> (et non paquet par paquet) portant sur les adresses MAC, IP et/ou numéros de ports TCP/UDP (<code>port-channel load-balance src-dst-ip</code>). Un flux donné (même couple IP/Port) empruntera toujours le même lien physique pour éviter le réordonnancement des paquets.'
        ],
        cli: `! Créer un EtherChannel LACP Layer 2 (Port-channel 1)
Switch(config)# interface range GigabitEthernet0/1 - 2
Switch(config-if-range)# channel-group 1 mode active
Switch(config-if-range)# exit
Switch(config)# interface Port-channel 1
Switch(config-if)# switchport mode trunk

! Créer un EtherChannel Layer 3 (Routed Port-Channel)
Switch(config)# interface Port-channel 10
Switch(config-if)# no switchport
Switch(config-if)# ip address 10.0.0.1 255.255.255.252
Switch(config)# interface range GigabitEthernet0/3 - 4
Switch(config-if-range)# no switchport
Switch(config-if-range)# channel-group 10 mode active

! Diagnostic indispensable (Flags : SU = Layer 2 In Use, RU = Layer 3 In Use, P = Bundled)
Switch# show etherchannel summary`
      },
      {
        id: 'sw-fhrp',
        tag: 'Modules 6 & 7',
        title: '5. Redondance de Passerelle (FHRP : HSRP, VRRP, GLBP) & Architecture WLAN',
        summary: 'Assurer la haute disponibilité de la passerelle par défaut des hôtes avec une IP/MAC virtuelle et comprendre le fonctionnement Split-MAC / CAPWAP.',
        bullets: [
          '<strong>HSRP (Hot Standby Router Protocol — Propriétaire Cisco)</strong> :<ul><li>Élit un routeur <strong>Active</strong> et un routeur <strong>Standby</strong> (les autres restent en état <em>Listen</em>). Priorité par défaut = <strong>100</strong> (le plus grand gagne ; en cas d’égalité, la <strong>plus grande adresse IP</strong> de l’interface gagne).</li><li>États HSRP dans l’ordre : <code>Disabled</code> → <code>Init</code> → <code>Learn</code> → <code>Listen</code> → <code>Speak</code> → <code>Standby</code> → <code>Active</code>.</li><li><strong>Preempt</strong> : désactivé par défaut en HSRP ! Sans <code>standby 1 preempt</code>, un routeur avec une priorité supérieure qui redémarre ne reprendra PAS le rôle Active tant que le routeur Active actuel fonctionne.</li><li><strong>HSRPv1 vs HSRPv2</strong> : v1 utilise <code>224.0.0.2</code> (UDP 1985), groupes 0–255, MAC <code>0000.0c07.acXX</code>. v2 utilise <code>224.0.0.102</code>, groupes 0–4095, MAC <code>0000.0c9f.fXXX</code>, timers en millisecondes et support IPv6.</li></ul>',
          '<strong>VRRP (Virtual Router Redundancy Protocol — Standard IETF RFC 5798)</strong> :<ul><li>Terminologie : un <strong>Master</strong> et un ou plusieurs <strong>Backup</strong>. Multicast <code>224.0.0.18</code> (IP Protocole 112), MAC <code>0000.5e00.01XX</code>.</li><li>Contrairement à HSRP, <strong>Preempt est ACTIVÉ par défaut en VRRP</strong>, et l’IP virtuelle peut être l’adresse IP réelle de l’interface du Master (qui a alors la priorité 255).</li></ul>',
          '<strong>GLBP (Gateway Load Balancing Protocol — Propriétaire Cisco)</strong> :<ul><li>Permet l’<strong>équilibrage de charge actif-actif</strong> entre jusqu’à <strong>4 routeurs simultanément</strong> sans configurer plusieurs groupes !</li><li>Élit un seul <strong>AVG (Active Virtual Gateway)</strong> qui répond aux requêtes ARP des clients en distribuant tour à tour (Round-Robin par défaut) les adresses MAC virtuelles (<code>0007.b400.XXYY</code>) de jusqu’à <strong>4 AVF (Active Virtual Forwarders)</strong>.</li></ul>',
          '<strong>Architecture Sans-Fil Cisco (Split-MAC & CAPWAP)</strong> :<ul><li>Les APs légers (Lightweight APs) établissent deux tunnels <strong>CAPWAP</strong> vers le WLC : Contrôle sur <strong>UDP 5246</strong> (chiffré par défaut en DTLS) et Données sur <strong>UDP 5247</strong>.</li><li>Pour découvrir un WLC en L3, l’AP utilise : Option DHCP <strong>43</strong>, DNS (<code>CISCO-CAPWAP-CONTROLLER.localdomain</code>), liste NVidia/NVRAM d’anciens WLCs ou Broadcast local L2.</li></ul>'
        ],
        table: {
          headers: ['Critère', 'HSRP v1 / v2', 'VRRP (Standard IETF)', 'GLBP'],
          rows: [
            ['Standard / Vendeur', 'Propriétaire Cisco', 'Standard ouvert (RFC 5798)', 'Propriétaire Cisco'],
            ['Rôles des routeurs', '1 Active / 1 Standby / Listen', '1 Master / N Backups', '1 AVG + jusqu’à 4 AVF actifs'],
            ['Équilibrage de charge natif', 'Non (nécessite MHSRP par VLAN)', 'Non (nécessite plusieurs groupes)', '✅ Oui (Round-Robin, Weighted, Host-dependent)'],
            ['Preempt par défaut', '❌ Désactivé', '✅ Activé par défaut', '❌ Désactivé sur AVG (Activé sur AVF)'],
            ['Adresse Multicast', '224.0.0.2 (v1) / 224.0.0.102 (v2)', '224.0.0.18 (IP Proto 112)', '224.0.0.102 (UDP 3222)'],
            ['Adresse MAC Virtuelle', '0000.0c07.acXX / 0000.0c9f.fXXX', '0000.5e00.01XX', '0007.b400.XXYY']
          ]
        },
        cli: `! Configuration HSRP v2 avec priorité, préemption et tracking d'interface
Router(config)# interface GigabitEthernet0/0
Router(config-if)# standby version 2
Router(config-if)# standby 10 ip 192.168.10.1
Router(config-if)# standby 10 priority 110
Router(config-if)# standby 10 preempt
Router(config-if)# standby 10 track 1 decrement 20`
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 2 : NETWORK ROUTING (MODULES 8 - 13)
  // ===========================================================================
  'ccnp-encor-v9-routing': {
    courseId: 'ccnp-encor-v9-routing',
    badge: 'Cours Complet • Modules 8 à 13',
    title: 'Routage Réseau (Network Routing)',
    subtitle: 'Décision de routage (AD vs Métrique), EIGRP (DUAL), OSPFv2/v3 (LSA 1–7, Aires Stub/NSSA), BGP (Best Path WLLA OMNI), Multicast (PIM) & NAT.',
    readingTime: '25 min',
    interactiveType: 'routing-sim',
    interactiveTitle: 'Explorateur Interactif : Architecture OSPF Multi-Aires (Filtrage LSA 1 à 7) & Sélecteur BGP Best Path (WLLA OMNI)',
    keyNumbers: [
      { label: 'Distances Admin (AD)', value: 'eBGP 20 • EIGRP 90 • OSPF 110', note: 'Connected 0 • Static 1 • EIGRP Ext 170 • iBGP 200' },
      { label: 'Multicast OSPF / EIGRP', value: '224.0.0.5 & .6 / .10', note: '.5 = AllSPFRouters • .6 = AllDRouters • .10 = EIGRP' },
      { label: 'BGP Port & Timers', value: 'TCP 179 (60s / 180s)', note: 'Keepalive = 60s • Holdtime = 180s • eBGP TTL = 1' },
      { label: 'Coût Référence OSPF', value: '100 Mbps (10^8 bps)', note: 'Cost = Ref_BW / Interface_BW (ajuster avec auto-cost)' }
    ],
    sections: [
      {
        id: 'rt-fundamentals-eigrp',
        tag: 'Modules 8 & 9',
        title: '1. Sélection de Routes, VRF, BFD & EIGRP (Algorithme DUAL)',
        summary: 'Ordre strict de décision d’un routeur Cisco (Longest Prefix Match vs Administrative Distance vs Metric), routes flottantes et condition de faisabilité EIGRP.',
        bullets: [
          '<strong>Règle d’or de sélection de route dans la RIB / FIB</strong> :<ul><li><strong>1. Longest Prefix Match (Masque le plus précis)</strong> : lors du transfert d’un paquet, un routeur choisit <em>toujours</em> la route présente dans la table de routage ayant le préfixe le plus long (ex: un <code>/26</code> appris en RIP l’emporte sur un <code>/24</code> appris en EIGRP ou connecté !).</li><li><strong>2. Administrative Distance (AD)</strong> : uniquement lorsque deux protocoles annoncent <strong>exactement le même préfixe et la même longueur de masque</strong> (ex: <code>10.1.1.0/24</code>), le routeur installe dans la RIB celui qui a la plus petite AD (Connected <code>0</code> < Static <code>1</code> < eBGP <code>20</code> < EIGRP Interne <code>90</code> < OSPF <code>110</code> < IS-IS <code>115</code> < RIP <code>120</code> < EIGRP Externe <code>170</code> < iBGP <code>200</code>).</li><li><strong>3. Metric</strong> : compare plusieurs chemins au sein d’un <em>même</em> protocole de routage. Si les métriques sont égales → <strong>ECMP (Equal-Cost Multipath)</strong> (EIGRP est le seul à supporter l’<em>Unequal-Cost Load Balancing</em> via la commande <code>variance</code>).</li></ul>',
          '<strong>EIGRP & Algorithme DUAL (Diffusing Update Algorithm)</strong> :<ul><li>Multicast <code>224.0.0.10</code> (IPv4) / <code>FF02::A</code> (IPv6), IP Protocole <strong>88</strong>. Pour former une adjacence, les voisins doivent partager : <strong>le même AS Number</strong>, <strong>les mêmes valeurs K (K1–K5)</strong> et être dans le même sous-réseau. (Les timers Hello/Hold n’ont <em>pas</em> besoin d’être identiques en EIGRP !).</li><li><strong>Reported Distance (RD) / Advertised Distance (AD)</strong> : métrique calculée par le voisin jusqu’à la destination.</li><li><strong>Feasible Distance (FD)</strong> : meilleure métrique totale depuis notre routeur jusqu’à la destination via le <strong>Successor</strong> (meilleur chemin primaire).</li><li><strong>Feasibility Condition (Condition de Faisabilité)</strong> : pour qu’un chemin alternatif sans boucle devienne un <strong>Feasible Successor</strong> (chemin de secours instantané en table de topologie), sa <strong>RD doit être strictement inférieure à la FD actuelle (<code>RD &lt; FD</code>)</strong>.</li></ul>'
        ],
        cli: `! Route statique flottante (AD = 130 > OSPF 110)
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1 130

! EIGRP Named Mode (unifie IPv4 et IPv6 sous une seule configuration)
Router(config)# router eigrp ENCOR_NET
Router(config-router)# address-family ipv4 unicast autonomous-system 100
Router(config-router-af)# network 10.0.0.0 0.255.255.255
Router(config-router-af)# af-interface default
Router(config-router-af-interface)# passive-interface`
      },
      {
        id: 'rt-ospf',
        tag: 'Modules 10 & 11',
        title: '2. OSPFv2 & OSPFv3 : États, DR/BDR, LSA 1 à 7 & Aires Spéciales',
        summary: 'Maîtriser les 7 états de voisinage OSPF, les types de LSA, la hiérarchie de sélection de chemin OSPF (O > O IA > N1 > E1 > N2 > E2) et les aires Stub/NSSA.',
        bullets: [
          '<strong>Conditions obligatoires pour former une adjacence OSPF</strong> : même <strong>Area ID</strong>, mêmes timers <strong>Hello (10s) et Dead (40s)</strong>, même <strong>MTU</strong> (sinon bloqué en <code>ExStart</code> / <code>Exchange</code>), même <strong>Type de réseau</strong>, même <strong>Flag d’aire Stub</strong>, même authentification, et <strong>Router ID unique</strong>.',
          '<strong>Les 7 États OSPF & Élection DR/BDR</strong> :<ul><li><code>Down</code> → <code>Init</code> → <code>2-Way</code> (élection du DR/BDR sur les réseaux Broadcast Multi-Access : priorité la plus haute [défaut 1, <strong>0 = ne participe jamais à l’élection</strong>], puis plus grand Router ID. Deux DROthers restent en état <strong>2-Way</strong> entre eux, ce qui est normal !) → <code>ExStart</code> (élection Master/Slave DBD selon le plus grand RID) → <code>Exchange</code> → <code>Loading</code> (LSR/LSU) → <code>Full</code>.</li><li><strong>Pas de préemption DR/BDR</strong> : si un nouveau routeur arrive avec la priorité 255, il ne détrône pas le DR actuel tant que le processus OSPF n’est pas redémarré ou que le DR et le BDR ne tombent pas.</li></ul>',
          '<strong>Ordre de préférence des routes OSPF</strong> : <strong>1. Intra-Area (<code>O</code>)</strong> > <strong>2. Inter-Area (<code>O IA</code>)</strong> > <strong>3. External/NSSA Type 1 (<code>O N1</code> / <code>O E1</code>)</strong> (additionne le coût externe + le coût interne jusqu’à l’ASBR) > <strong>4. External/NSSA Type 2 (<code>O N2</code> / <code>O E2</code>)</strong> (défaut lors d’une redistribution : garde uniquement le coût externe initial, typiquement 20).',
          '<strong>Les 6 Types de LSA essentiels en entreprise</strong> :<ul><li><strong>LSA Type 1 (Router LSA)</strong> : généré par <em>chaque</em> routeur, décrit ses liens directs, reste confiné dans son aire d’origine.</li><li><strong>LSA Type 2 (Network LSA)</strong> : généré par le <strong>DR</strong> sur un segment multi-accès, reste dans l’aire.</li><li><strong>LSA Type 3 (Summary LSA)</strong> : généré par l’<strong>ABR</strong> pour annoncer les préfixes d’une aire vers les autres aires (<code>O IA</code>).</li><li><strong>LSA Type 4 (ASBR Summary LSA)</strong> : généré par l’<strong>ABR</strong> pour indiquer aux autres aires comment joindre le Router-ID de l’<strong>ASBR</strong>.</li><li><strong>LSA Type 5 (AS External LSA)</strong> : généré par l’<strong>ASBR</strong> pour les routes redistribuées hors OSPF, inondé dans tout le domaine OSPF (sauf aires Stub/NSSA).</li><li><strong>LSA Type 7 (NSSA External LSA)</strong> : généré par un <strong>ASBR situé dans une aire NSSA</strong>, puis traduit en <strong>LSA Type 5</strong> par l’ABR NSSA vers l’Area 0.</li></ul>'
        ],
        table: {
          headers: ['Type d’Aire OSPF', 'LSA 1 & 2', 'LSA 3 (Inter-Area)', 'LSA 4 & 5 (Externe)', 'LSA 7 (ASBR Local)', 'Route par Défaut Injectée'],
          rows: [
            ['Standard / Backbone (Area 0)', '✅ Oui', '✅ Oui', '✅ Oui', '❌ Non', 'Seulement via default-information originate'],
            ['Stub Area', '✅ Oui', '✅ Oui', '❌ Bloqués', '❌ Non', '✅ Auto par ABR (LSA 3 : O*IA)'],
            ['Totally Stubby Area (Cisco)', '✅ Oui', '❌ Bloqués (sauf 0.0.0.0)', '❌ Bloqués', '❌ Non', '✅ Auto par ABR (LSA 3 : O*IA)'],
            ['NSSA (Not-So-Stubby Area)', '✅ Oui', '✅ Oui', '❌ Bloqués', '✅ Oui', 'Manuel (area X nssa default-information-originate -> O*N2)'],
            ['Totally NSSA (Cisco)', '✅ Oui', '❌ Bloqués (sauf 0.0.0.0)', '❌ Bloqués', '✅ Oui', '✅ Auto par ABR (LSA 3 : O*IA)']
          ]
        },
        cli: `! Ajuster la bande passante de référence OSPF pour les liens 10G / 40G (ex: 100 Gbps)
Router(config)# router ospf 1
Router(config-router)# auto-cost reference-bandwidth 100000

! Configurer une aire Totally Stubby (sur l'ABR : stub no-summary / sur les routeurs internes : stub)
ABR(config-router)# area 10 stub no-summary
Internal(config-router)# area 10 stub`
      },
      {
        id: 'rt-bgp',
        tag: 'Module 12',
        title: '3. BGP (eBGP & iBGP) et Sélection du Meilleur Chemin (WLLA OMNI)',
        summary: 'Protocole Path-Vector inter-domaine (TCP 179), règles eBGP vs iBGP, attributs de chemin et algorithme de sélection BGP Best Path.',
        bullets: [
          '<strong>Fondamentaux eBGP vs iBGP</strong> :<ul><li>Utilise <strong>TCP port 179</strong>. États BGP : <code>Idle</code> → <code>Connect</code> → <code>Active</code> (si la session TCP échoue ou cherche à s’établir, le routeur alterne entre Connect et Active) → <code>OpenSent</code> → <code>OpenConfirm</code> → <code>Established</code> (seul état où les préfixes BGP <code>Update</code> sont échangés).</li><li><strong>eBGP (AS différents)</strong> : TTL = 1 par défaut (nécessite <code>neighbor X ebgp-multihop N</code> si session via Loopbacks), modifie automatiquement le <code>NEXT_HOP</code> et préfixe son numéro d’AS au début de l’<code>AS_PATH</code>.</li><li><strong>iBGP (Même AS)</strong> : TTL = 255. <strong>Ne modifie PAS le NEXT_HOP</strong> reçu d’un voisin eBGP (d’où l’importance de configurer <code>neighbor X next-hop-self</code> sur le routeur de bordure !) et applique la règle d’<strong>iBGP Split-Horizon</strong> (une route apprise d’un pair iBGP n’est jamais réannoncée à un autre pair iBGP → nécessite un Full-Mesh iBGP ou un <strong>Route Reflector</strong>).</li></ul>',
          '<strong>Condition préalable absolue en BGP</strong> : une route BGP n’est candidate au titre de Best Path que si son adresse IP de <strong>NEXT_HOP est joignable</strong> dans la table de routage IGP !',
          '<strong>Algorithme BGP Best Path (Mnémotechnique : WLLA OMNI)</strong> :<ul><li><strong>1. Weight</strong> : propriétaire Cisco, local au routeur uniquement (jamais envoyé aux voisins). <strong>Le plus grand gagne</strong> (défaut : <code>32768</code> pour les routes locales, <code>0</code> pour les routes apprises).</li><li><strong>2. Local Preference (LOCAL_PREF)</strong> : propagé dans tout l’AS (iBGP) pour influencer le <strong>trafic SORTANT</strong> de l’AS. <strong>Le plus grand gagne</strong> (défaut : <code>100</code>).</li><li><strong>3. Locally Originated</strong> : préfère les routes injectées localement par ce routeur (<code>network</code> ou <code>redistribute</code> > <code>aggregate-address</code>).</li><li><strong>4. AS_PATH</strong> : liste des AS traversés (sert aussi de mécanisme anti-boucle : un routeur rejette tout préfixe contenant déjà son propre AS). <strong>Le plus court gagne</strong> (manipulable pour le trafic ENTRANT avec l’<em>AS-Path Prepending</em>).</li><li><strong>5. Origin Code</strong> : préfère <code>i</code> (IGP / commande <code>network</code>) > <code>e</code> (EGP) > <code>?</code> (Incomplete / commande <code>redistribute</code>).</li><li><strong>6. MED (Multi-Exit Discriminator)</strong> : échangé entre deux AS voisins pour influencer le <strong>trafic ENTRANT</strong> dans notre AS. <strong>Le plus petit gagne</strong> (défaut : <code>0</code>).</li><li><strong>7. eBGP over iBGP</strong> : préfère un chemin appris en eBGP plutôt qu’en iBGP.</li><li><strong>8. IGP Metric vers le Next-Hop</strong> : le plus faible coût IGP vers le BGP Next-Hop gagne (puis plus ancienne route eBGP, puis plus petit Router-ID BGP).</li></ul>'
        ],
        cli: `! Configuration eBGP + iBGP avec Loopback et next-hop-self
Router(config)# router bgp 65001
Router(config-router)# bgp router-id 1.1.1.1
Router(config-router)# neighbor 203.0.113.2 remote-as 65002
Router(config-router)# neighbor 10.255.255.2 remote-as 65001
Router(config-router)# neighbor 10.255.255.2 update-source Loopback0
Router(config-router)# neighbor 10.255.255.2 next-hop-self

! Influence du trafic sortant avec Local Preference via Route-Map
Router(config)# route-map SET_LP permit 10
Router(config-route-map)# set local-preference 200
Router(config)# router bgp 65001
Router(config-router)# neighbor 203.0.113.2 route-map SET_LP in`
      },
      {
        id: 'rt-multicast-nat',
        tag: 'Module 13',
        title: '4. Routage Multicast (IGMP, PIM-DM / PIM-SM, RP) & NAT / PAT',
        summary: 'Gestion des groupes Multicast IPv4 (224.0.0.0/4), arbres de distribution (*,G) et (S,G), Reverse Path Forwarding (RPF) et traduction d’adresses NAT.',
        bullets: [
          '<strong>Adresses Multicast & MAC associée</strong> : Plage Classe D <code>224.0.0.0</code> à <code>239.255.255.255</code> (<code>224.0.0.0/24</code> = local link, non routé ; <code>239.0.0.0/8</code> = Administratively Scoped / Privé). Une IP Multicast est projetée sur l’adresse MAC Ethernet <strong><code>01:00:5e:XX:XX:XX</code></strong> en recopiant les <strong>23 derniers bits</strong> de l’adresse IPv4.',
          '<strong>IGMP (Host-to-Router)</strong> :<ul><li><strong>IGMPv1</strong> : Membership Query + Membership Report (pas de Leave explicite).</li><li><strong>IGMPv2</strong> : ajoute le message <strong>Leave Group</strong> (envoyé à <code>224.0.0.2</code>) et les Group-Specific Queries.</li><li><strong>IGMPv3</strong> : ajoute le support de <strong>SSM (Source-Specific Multicast, 232.0.0.0/8)</strong> permettant à un hôte de s’abonner uniquement à une source précise <code>(S,G)</code> sans avoir besoin d’un Rendezvous Point !</li><li><strong>IGMP Snooping</strong> : fonction sur les switches L2 qui écoute les messages IGMP entre hôtes et routeur afin de ne transmettre le flux multicast qu’aux ports ayant demandé le groupe.</li></ul>',
          '<strong>PIM (Protocol Independent Multicast) & RPF Check</strong> :<ul><li><strong>RPF (Reverse Path Forwarding)</strong> : anti-boucle fondamental en multicast. Le routeur vérifie dans sa table Unicast par quelle interface il joindrait l’IP <strong>Source</strong> du paquet multicast. Si le paquet multicast est arrivé par cette même interface, le RPF Check réussit ; sinon, le paquet est détruit !</li><li><strong>PIM Dense Mode (Push / Flood-and-Prune)</strong> : inonde tout le réseau puis élague les branches sans récepteurs toutes les 3 minutes (arbres sources <code>(S,G)</code> uniquement).</li><li><strong>PIM Sparse Mode (Pull / Rendezvous Point)</strong> : les récepteurs rejoignent d’abord l’arbre partagé <strong><code>(*,G)</code></strong> centré sur le <strong>RP (Rendezvous Point)</strong>, puis basculent vers l’arbre source optimal <strong><code>(S,G)</code></strong> (SPT Switchover). Modes de découverte du RP : Statique, <strong>Auto-RP</strong> (Cisco, <code>224.0.1.39</code> et <code>224.0.1.40</code>) ou <strong>BSR (Bootstrap Router</strong>, standard IETF).</li></ul>',
          '<strong>Les 4 adresses NAT à maîtriser</strong> :<ul><li><strong>Inside Local</strong> : adresse IP privée réelle de l’hôte interne avant traduction (ex: <code>192.168.1.10</code>).</li><li><strong>Inside Global</strong> : adresse IP publique représentant l’hôte interne sur Internet après traduction (ex: <code>203.0.113.5</code>).</li><li><strong>Outside Global</strong> : adresse IP publique réelle du serveur distant sur Internet.</li><li><strong>Outside Local</strong> : adresse IP sous laquelle le serveur distant apparaît aux hôtes du réseau interne (généralement identique à l’Outside Global).</li></ul>'
        ]
      }
    ]
  },

  // ===========================================================================
  // CHECKPOINT 3 : NETWORK SECURITY (MODULES 14 - 16)
  // ===========================================================================
  'ccnp-encor-v9-security': {
    courseId: 'ccnp-encor-v9-security',
    badge: 'Cours Complet • Modules 14 à 16',
    title: 'Sécurité Réseau (Network Security)',
    subtitle: 'Control Plane Policing (CoPP), Sécurité Layer 2 (DHCP Snooping, DAI, IPSG), AAA (TACACS+ vs RADIUS), 802.1X / MAB / WebAuth, Sécurité Wi-Fi (WPA3/EAP) & Firewalls.',
    readingTime: '18 min',
    interactiveType: 'security-sim',
    interactiveTitle: 'Schéma Interactif : Bouclier Layer 2 (DHCP Snooping → DAI → IPSG) & Flux 802.1X / AAA (TACACS+ vs RADIUS)',
    keyNumbers: [
      { label: 'TACACS+ (Cisco)', value: 'TCP 49', note: 'Chiffre TOUT le payload • Sépare AuthN / AuthZ / Acc' },
      { label: 'RADIUS (IETF)', value: 'UDP 1812 / 1813', note: 'Chiffre le mot de passe seul • Combine AuthN + AuthZ' },
      { label: 'Violations Port-Security', value: 'Shutdown (défaut)', note: 'Protect (drop silencieux) • Restrict (drop + syslog + SNMP)' },
      { label: 'Protocole 802.1X L2', value: 'EAPOL → RADIUS', note: 'Supplicant ↔ Authenticator (EAPOL) ↔ ISE (RADIUS)' }
    ],
    sections: [
      {
        id: 'sec-copp-infra',
        tag: 'Module 14',
        title: '1. Protection du Plan de Contrôle : CoPP, ACLs & uRPF',
        summary: 'Protéger le CPU du routeur/switch contre les attaques par déni de service (DoS) tout en préservant les protocoles de routage critiques.',
        bullets: [
          '<strong>Les 3 Plans d’un équipement réseau</strong> :<ul><li><strong>Data Plane (Forwarding Plane)</strong> : transfert matériel rapide des paquets de transit (ASIC / CEF).</li><li><strong>Control Plane</strong> : trafic destiné au CPU du routeur/switch pour maintenir la topologie (OSPF, EIGRP, BGP, ARP, STP, BFD, PIM).</li><li><strong>Management Plane</strong> : sous-ensemble dédié à l’administration de l’équipement (SSH, Telnet, SNMP, NETCONF, RESTCONF, Syslog).</li></ul>',
          '<strong>CoPP (Control Plane Policing)</strong> : applique une politique QoS MQC (<strong>1. ACL</strong> → <strong>2. Class-Map</strong> → <strong>3. Policy-Map</strong> avec commande <code>police</code> → <strong>4. Service-Policy</strong> attachée sous l’interface virtuelle <code>control-plane</code>) pour limiter le débit des paquets atteignant le CPU (ex: protéger BGP/OSPF en classe critique et brider les pings ICMP ou paquets inconnus).',
          '<strong>uRPF (Unicast Reverse Path Forwarding)</strong> : lutte contre l’usurpation d’adresse IP source (IP Spoofing) en vérifiant la FIB :<ul><li><strong>Strict Mode</strong> : l’adresse IP source du paquet doit exister dans la FIB <strong>ET</strong> l’interface par laquelle le paquet est entré doit correspondre exactement au meilleur chemin retour vers cette source.</li><li><strong>Loose Mode</strong> : l’adresse IP source doit simplement exister dans la FIB (via n’importe quelle interface, hors route par défaut sauf si <code>allow-default</code> est précisé).</li></ul>'
        ],
        cli: `! Configuration CoPP en 4 étapes (ACL -> Class-Map -> Policy-Map -> control-plane)
Router(config)# ip access-list extended ACL_ROUTING
Router(config-ext-nacl)# permit ospf any any
Router(config-ext-nacl)# permit tcp any any eq bgp
Router(config)# class-map match-any CM_ROUTING
Router(config-cmap)# match access-group name ACL_ROUTING
Router(config)# policy-map PM_COPP
Router(config-pmap)# class CM_ROUTING
Router(config-pmap-c)# police 512000 conform-action transmit exceed-action transmit
Router(config)# control-plane
Router(config-cp)# service-policy input PM_COPP`
      },
      {
        id: 'sec-layer2',
        tag: 'Module 14 & 15',
        title: '2. Sécurité Couche 2 : DHCP Snooping, DAI, IPSG & Port Security',
        summary: 'Contrer les attaques LAN (Rogue DHCP, ARP Spoofing/Poisoning, MAC Flooding, VLAN Hopping) grâce à la base de liaison DHCP Snooping.',
        bullets: [
          '<strong>DHCP Snooping (Socle de la sécurité L2)</strong> :<ul><li>Classe les ports en <strong>Untrusted</strong> (par défaut, ports clients : bloque tout message serveur <code>DHCPOFFER</code>, <code>DHCPACK</code>, <code>DHCPNAK</code>) et <strong>Trusted</strong> (uplinks vers le vrai serveur DHCP ou routeur).</li><li>Construit dynamiquement la <strong>DHCP Snooping Binding Database</strong> qui associe : <strong>Adresse MAC + Adresse IP + VLAN + Interface + Lease Time</strong>.</li></ul>',
          '<strong>DAI (Dynamic ARP Inspection)</strong> :<ul><li>Empêche le <em>Man-in-the-Middle</em> par <strong>ARP Poisoning / Spoofing</strong>.</li><li>Sur les ports <strong>Untrusted</strong>, le switch intercepte chaque paquet ARP et vérifie que le couple <code>(IP Source, MAC Source)</code> correspond à une entrée valide dans la <strong>DHCP Snooping Binding Database</strong> (ou dans une <em>ARP ACL</em> statique pour les serveurs à IP fixe). Si non conforme, la trame ARP est détruite !</li></ul>',
          '<strong>IPSG (IP Source Guard)</strong> : s’appuie lui aussi sur la base DHCP Snooping pour filtrer le trafic IP entrant sur les ports non fiables (<code>ip verify source</code>) afin d’empêcher un hôte de changer manuellement son adresse IP.',
          '<strong>Port Security</strong> : limite le nombre d’adresses MAC sur un port d’accès. Les 3 modes de violation :<ul><li><strong>Protect</strong> : jette les trames des MAC non autorisées en silence (aucun log, aucun compteur incrémenté, le port reste UP).</li><li><strong>Restrict</strong> : jette les trames des MAC non autorisées, mais <strong>envoie un message Syslog, un trap SNMP et incrémente le compteur de violation</strong> (le port reste UP).</li><li><strong>Shutdown (Défaut)</strong> : place immédiatement le port en état <strong>err-disabled</strong> et envoie une alerte Syslog/SNMP.</li></ul>',
          '<strong>Mitigation du VLAN Hopping</strong> : 1) Désactiver DTP (<code>switchport mode access</code> + <code>switchport nonegotiate</code>), 2) Ne jamais utiliser le VLAN 1, 3) Assigner le <strong>Native VLAN</strong> des Trunks à un VLAN dédié inutilisé (contre le <em>Double Tagging 802.1Q</em>).'
        ],
        cli: `! Activer la triade DHCP Snooping + DAI + IPSG sur le VLAN 10
Switch(config)# ip dhcp snooping
Switch(config)# ip dhcp snooping vlan 10
Switch(config)# no ip dhcp snooping information option
Switch(config)# ip arp inspection vlan 10

! Port Uplink vers le serveur DHCP / Routeur -> TRUSTED
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# ip dhcp snooping trust
Switch(config-if)# ip arp inspection trust

! Port Client -> UNTRUSTED (par défaut) avec rate-limit et IP Source Guard
Switch(config)# interface GigabitEthernet0/2
Switch(config-if)# ip dhcp snooping limit rate 15
Switch(config-if)# ip verify source`
      },
      {
        id: 'sec-aaa-8021x',
        tag: 'Module 15 & 16',
        title: '3. AAA (TACACS+ vs RADIUS), Contrôle d’Accès (802.1X, MAB, WebAuth) & Wi-Fi',
        summary: 'Différencier TACACS+ (administration d’équipements) et RADIUS (accès réseau 802.1X/Wi-Fi), et comprendre EAP-TLS, PEAP, EAP-FAST et WPA3.',
        bullets: [
          '<strong>Les 3 piliers AAA</strong> : <strong>Authentication</strong> (Qui êtes-vous ?), <strong>Authorization</strong> (Qu’avez-vous le droit de faire/exécuter ?), <strong>Accounting</strong> (Traçabilité de ce que vous avez fait). Activé par la commande globale <code>aaa new-model</code>.',
          '<strong>TACACS+ vs RADIUS (Question incontournable du CCNP ENCOR)</strong> :<ul><li><strong>TACACS+</strong> : utilise <strong>TCP port 49</strong>, chiffre <strong>l’intégralité du corps du paquet</strong> (seul l’en-tête TACACS+ reste en clair), et <strong>sépare totalement Authentication, Authorization et Accounting</strong>. Idéal pour l’<strong>administration des équipements</strong> (Device Administration) car il permet d’autoriser chaque commande CLI tapée une par une.</li><li><strong>RADIUS</strong> : utilise <strong>UDP ports 1812/1813</strong> (ou anciens ports 1645/1646), chiffre <strong>uniquement l’attribut mot de passe</strong>, et <strong>combine Authentication et Authorization</strong> dans le même message <code>Access-Accept</code>. Idéal pour l’<strong>accès réseau des utilisateurs</strong> (802.1X filaire/Wi-Fi, VPN, attribution dynamique de VLAN ou d’ACL téléchargeable dACL).</li></ul>',
          '<strong>Les 3 méthodes de contrôle d’accès au réseau (Port-Based Access Control)</strong> :<ul><li><strong>IEEE 802.1X</strong> : le plus sécurisé. Fait intervenir 3 acteurs : <strong>Supplicant</strong> (logiciel client sur le PC), <strong>Authenticator</strong> (Switch ou WLC qui bloque le port jusqu’à validation, ne laissant passer que CDP, STP et EAPOL) et <strong>Authentication Server</strong> (serveur RADIUS tel que <strong>Cisco ISE</strong>).</li><li><strong>MAB (MAC Authentication Bypass)</strong> : solution de repli pour les équipements sans supplicant 802.1X (imprimantes, caméras IP). Le switch envoie l’adresse MAC de l’appareil au serveur RADIUS.</li><li><strong>WebAuth (Web Authentication)</strong> : portail captif HTTP/HTTPS redirigeant le navigateur de l’utilisateur (idéal pour les invités / Guest Wi-Fi).</li></ul>',
          '<strong>Protocoles EAP & Sécurité Sans-Fil (WPA2 / WPA3)</strong> :<ul><li><strong>EAP-TLS</strong> : le plus sécurisé, exige un <strong>certificat X.509 à la fois sur le serveur ET sur chaque poste client</strong>.</li><li><strong>PEAP (Protected EAP)</strong> : crée un tunnel TLS avec le <strong>certificat du serveur uniquement</strong>, puis authentifie l’utilisateur par login/mot de passe (MSCHAPv2) à l’intérieur du tunnel.</li><li><strong>EAP-FAST</strong> : développé par Cisco, utilise des <strong>PAC (Protected Access Credentials)</strong> à la place des certificats.</li><li><strong>WPA3</strong> : remplace le PSK WPA2 par <strong>SAE (Simultaneous Authentication of Equals)</strong> (protège contre les attaques par dictionnaire hors-ligne et offre le Perfect Forward Secrecy) et rend obligatoire <strong>802.11w PMF (Protected Management Frames)</strong>.</li></ul>'
        ],
        table: {
          headers: ['Caractéristique', 'TACACS+', 'RADIUS'],
          rows: [
            ['Protocole & Port de Transport', 'TCP Port 49', 'UDP Ports 1812 (Auth) & 1813 (Acc) [ou 1645/1646]'],
            ['Chiffrement du paquet', '✅ Chiffre TOUT le payload (corps complet)', '⚠️ Chiffre uniquement le champ Mot de Passe'],
            ['Architecture AAA', 'Sépare AuthN, AuthZ et Accounting', 'Combine AuthN et AuthZ ensemble'],
            ['Contrôle des commandes CLI', '✅ Oui (autorisation commande par commande)', '❌ Non'],
            ['Cas d’usage privilégié', 'Administration des routeurs / switches (Device Admin)', 'Accès Réseau 802.1X, Wi-Fi, VPN, CoA (Change of Auth)']
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
    badge: 'Cours Complet • Modules 17 à 20',
    title: 'Virtualisation & Services Réseau',
    subtitle: 'Hyperviseurs Type 1/2, VRF-Lite, Tunnels GRE & IPsec (IKEv1/v2, Transport vs Tunnel), NTP, SNMPv3, Syslog (0–7), NetFlow, SPAN/ERSPAN, IP SLA & EEM.',
    readingTime: '20 min',
    interactiveType: 'virtualization-sim',
    interactiveTitle: 'Visualiseur Interactif : Encapsulation Paquet (IP / GRE / IPsec / GRE over IPsec) & Échelle Syslog (0 à 7)',
    keyNumbers: [
      { label: 'Protocole IP GRE / ESP / AH', value: 'IP 47 / IP 50 / IP 51', note: 'GRE = 24 octets d’overhead (20 IP + 4 GRE) • IKE = UDP 500/4500' },
      { label: 'Niveaux Syslog', value: '0 (Emerg) → 7 (Debug)', note: 'UDP 514 • Plus le chiffre est petit, plus c’est critique' },
      { label: 'Ports NTP / SNMP', value: 'UDP 123 / UDP 161-162', note: 'NTP Stratum 1 = horloge atomique (16 = non synchronisé)' },
      { label: 'ERSPAN Encapsulation', value: 'GRE (Layer 3)', note: 'Permet de router le trafic miroir SPAN à travers un réseau IP' }
    ],
    sections: [
      {
        id: 'virt-hypervisor-vrf',
        tag: 'Modules 17 & 18',
        title: '1. Hyperviseurs (Type 1 vs Type 2), vSwitch & VRF-Lite',
        summary: 'Virtualisation des serveurs et segmentation de la table de routage d’un même routeur physique en plusieurs instances virtuelles indépendantes.',
        bullets: [
          '<strong>Hyperviseurs Type 1 vs Type 2</strong> :<ul><li><strong>Type 1 (Bare-Metal / Natif)</strong> : s’installe <strong>directement sur le matériel physique</strong> du serveur sans OS hôte intermédiaire (ex: <strong>VMware ESXi, Microsoft Hyper-V, KVM, Citrix XenServer</strong>). Performances maximales pour les datacenters.</li><li><strong>Type 2 (Hosted / Hébergé)</strong> : s’exécute comme une application au-dessus d’un système d’exploitation hôte existant Windows/macOS/Linux (ex: <strong>VMware Workstation, VMware Fusion, Oracle VirtualBox</strong>).</li></ul>',
          '<strong>VRF-Lite (Virtual Routing and Forwarding sans MPLS)</strong> :<ul><li>Permet de créer plusieurs <strong>tables de routage (RIB) et de transfert (FIB/CEF) totalement isolées</strong> sur un seul routeur physique (similaire aux VLANs, mais à la Couche 3).</li><li>Des clients différents (ex: VRF <code>CLIENT_A</code> et VRF <code>CLIENT_B</code>) peuvent ainsi utiliser exactement les <strong>mêmes plages d’adresses IP chevauchantes</strong> (ex: <code>10.0.0.0/8</code>) sans aucun conflit.</li><li>Une interface physique ou sous-interface 802.1Q est rattachée à une VRF avec <code>vrf forwarding &lt;NOM&gt;</code> (⚠️ cette commande efface l’adresse IP existante de l’interface, qu’il faut donc reconfigurer après !).</li></ul>'
        ],
        cli: `! Créer une VRF multi-protocole (IPv4/IPv6) et y rattacher une interface
Router(config)# vrf definition CLIENT_A
Router(config-vrf)# address-family ipv4
Router(config-vrf-af)# exit-address-family
Router(config)# interface GigabitEthernet0/1.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# vrf forwarding CLIENT_A
Router(config-subif)# ip address 10.1.1.1 255.255.255.0

! Exécuter un ping ou afficher la table de routage d'une VRF spécifique
Router# show ip route vrf CLIENT_A
Router# ping vrf CLIENT_A 10.1.1.254`
      },
      {
        id: 'virt-gre-ipsec',
        tag: 'Module 18',
        title: '2. Tunnels GRE, Architecture IPsec (ESP vs AH, IKE) & GRE over IPsec',
        summary: 'Comparer les tunnels GRE (support Multicast sans chiffrement) et IPsec (chiffrement fort Unicast), ainsi que les modes Transport et Tunnel.',
        bullets: [
          '<strong>GRE (Generic Routing Encapsulation — Protocole IP 47)</strong> :<ul><li>Encapsule n’importe quel protocole de couche 3 (IPv4, IPv6, traffic <strong>Multicast OSPF/EIGRP/PIM</strong>) dans un nouvel en-tête IP.</li><li>Ajoute <strong>24 octets d’overhead</strong> (20 octets de nouvel en-tête IP + 4 octets d’en-tête GRE), réduisant la MTU effective à <strong>1476 octets</strong> sur un lien Ethernet standard de 1500 octets.</li><li>⚠️ <strong>GRE ne fournit AUCUN chiffrement ni confidentialité</strong> par lui-même.</li><li><strong>Problème de routage récursif (Recursive Routing)</strong> : survient si le routeur apprend la route vers l’adresse IP de <em>destination physique du tunnel</em> à travers le tunnel lui-même (le tunnel monte et tombe en boucle : <code>%TUN-5-RECURDOWN</code>).</li></ul>',
          '<strong>IPsec Framework (Confidentialité, Intégrité, Authentification, Anti-Replay)</strong> :<ul><li><strong>IKE (Internet Key Exchange — UDP 500, ou UDP 4500 si NAT-T)</strong> :<ul><li><strong>IKEv1 Phase 1</strong> : établit le tunnel de contrôle sécurisé (ISAKMP SA) en <strong>Main Mode</strong> (6 messages, protège l’identité des pairs) ou <strong>Aggressive Mode</strong> (3 messages, plus rapide mais identité non chiffrée).</li><li><strong>IKEv1 Phase 2</strong> : établit les tunnels de données unidirectionnels (IPsec SA) en <strong>Quick Mode</strong> (3 messages).</li><li><strong>IKEv2</strong> : plus léger et moderne, établit le tunnel en seulement <strong>4 messages</strong> (<code>IKE_SA_INIT</code> + <code>IKE_AUTH</code>), intègre le Dead Peer Detection (DPD) et le NAT-T nativement.</li></ul></li><li><strong>AH (Authentication Header — IP 51) vs ESP (Encapsulating Security Payload — IP 50)</strong> : <strong>AH</strong> assure l’intégrité et l’authentification mais <strong>ne chiffre rien</strong> et est incompatible avec le NAT. <strong>ESP</strong> assure le <strong>chiffrement (AES/3DES)</strong> + l’intégrité (SHA) + l’authentification et fonctionne avec NAT-T.</li><li><strong>Mode Transport vs Mode Tunnel</strong> : le <strong>Mode Transport</strong> conserve l’en-tête IP original et ne chiffre que la charge utile (utilisé de bout-en-bout ou avec un tunnel GRE). Le <strong>Mode Tunnel</strong> chiffre l’intégralité du paquet IP original et ajoute un nouvel en-tête IP externe (utilisé pour les VPN Site-à-Site).</li><li><strong>GRE over IPsec</strong> : combine le meilleur des deux mondes — GRE encapsule le trafic Multicast (OSPF/EIGRP) en un paquet Unicast, puis IPsec chiffre ce paquet GRE !</li></ul>'
        ],
        cli: `! Configuration d'une interface Tunnel GRE avec protection IPsec (Tunnel Protection)
Router(config)# interface Tunnel0
Router(config-if)# ip address 172.16.0.1 255.255.255.252
Router(config-if)# ip mtu 1400
Router(config-if)# ip tcp adjust-mss 1360
Router(config-if)# tunnel source GigabitEthernet0/0
Router(config-if)# tunnel destination 198.51.100.2
Router(config-if)# tunnel mode gre ip
Router(config-if)# tunnel protection ipsec profile VPN_PROFILE`
      },
      {
        id: 'virt-services-assurance',
        tag: 'Modules 19 & 20',
        title: '3. Services & Assurance : NTP, SNMPv3, Syslog, NetFlow, SPAN/ERSPAN, IP SLA & EEM',
        summary: 'Synchronisation horaire, supervision sécurisée, niveaux de journalisation Syslog, analyse de flux et automatisation locale par événements.',
        bullets: [
          '<strong>NTP (Network Time Protocol — UDP 123)</strong> : hiérarchie par <strong>Stratum</strong> de <code>0</code> (horloge atomique/GPS) à <code>15</code> (<code>16</code> = non synchronisé). Un équipement se synchronise sur un serveur de Stratum <em>N</em> et devient lui-même Stratum <em>N+1</em>.',
          '<strong>SNMP (UDP 161 pour Requêtes/Réponses, UDP 162 pour Traps/Informs)</strong> :<ul><li><strong>SNMPv1 / v2c</strong> : sécurité faible par simple chaîne de communauté en clair (<em>Community String</em> RO/RW). v2c ajoute <code>GetBulk</code> et les messages <strong>Inform</strong> (qui, contrairement aux Traps, exigent un accusé de réception du serveur NMS).</li><li><strong>SNMPv3</strong> : ajoute l’authentification par utilisateur et le chiffrement selon 3 niveaux : 1) <code>noAuthNoPriv</code>, 2) <code>authNoPriv</code> (intégrité MD5/HMAC-SHA), 3) <strong><code>authPriv</code></strong> (authentification SHA + chiffrement <strong>AES/DES</strong>).</li></ul>',
          '<strong>Syslog (UDP 514) — Les 8 niveaux de sévérité (0 à 7)</strong> :<ul><li><code>0</code> <strong>Emergencies</strong> — <code>1</code> <strong>Alerts</strong> — <code>2</code> <strong>Critical</strong> — <code>3</code> <strong>Errors</strong> — <code>4</code> <strong>Warnings</strong> — <code>5</code> <strong>Notifications</strong> — <code>6</code> <strong>Informational</strong> — <code>7</code> <strong>Debugging</strong>.</li><li>Mnémotechnique : <em><strong>E</strong>very <strong>A</strong>wesome <strong>C</strong>isco <strong>E</strong>ngineer <strong>W</strong>ill <strong>N</strong>eed <strong>I</strong>cecream <strong>D</strong>aily</em>.</li><li>⚠️ Configurer <code>logging trap 4</code> (ou <code>logging trap warning</code>) envoie au serveur Syslog tous les messages de niveau <strong>0, 1, 2, 3 et 4</strong> (tous les niveaux de gravité inférieure ou égale à 4).</li></ul>',
          '<strong>NetFlow vs SPAN / RSPAN / ERSPAN</strong> :<ul><li><strong>NetFlow / IPFIX</strong> : collecte des <strong>métadonnées statistiques de flux</strong> (qui parle à qui, sur quel port, combien d’octets/paquets — les 5 à 7 champs clés du flux : <em>Source IP, Dest IP, Source Port, Dest Port, Protocol Type, ToS byte, Input Logical Interface</em>), mais ne capture PAS la charge utile (payload) des paquets.</li><li><strong>SPAN / RSPAN / ERSPAN</strong> : recopie l’<strong>intégralité des paquets</strong> vers un analyseur (Wireshark/IDS). <strong>Local SPAN</strong> = même switch ; <strong>RSPAN</strong> = à travers un VLAN dédié L2 entre switches ; <strong>ERSPAN</strong> = encapsule les trames copiées dans un tunnel <strong>GRE Layer 3</strong> routable à travers tout le réseau IP !</li></ul>',
          '<strong>IP SLA & Cisco EEM (Embedded Event Manager)</strong> :<ul><li><strong>IP SLA</strong> : génère du trafic synthétique actif (ICMP Echo, UDP Jitter VoIP, HTTP, DNS) pour mesurer en continu la latence, la gigue, la perte de paquets et piloter le basculement de routes statiques ou HSRP via un objet <code>track</code>.</li><li><strong>Cisco EEM</strong> : moteur d’automatisation embarqué sur IOS composé d’un <strong>Event Detector</strong> (qui surveille un pattern Syslog, une commande CLI, un compteur SNMP ou un timer) et d’une <strong>Action</strong> (Applet en configuration CLI ou script Python/Tcl).</li></ul>'
        ],
        table: {
          headers: ['Niveau Syslog', 'Nom Officiel', 'Mot-clé CLI', 'Signification Type'],
          rows: [
            ['0', 'Emergencies', 'emergencies', 'Système inutilisable (panne critique totale)'],
            ['1', 'Alerts', 'alerts', 'Action immédiate requise'],
            ['2', 'Critical', 'critical', 'Conditions critiques (ex: défaillance matérielle/alimentation)'],
            ['3', 'Errors', 'errors', 'Messages d’erreur (ex: interface physiquement tombée %LINK-3-UPDOWN)'],
            ['4', 'Warnings', 'warnings', 'Avertissements (ex: %CDP-4-NATIVE_VLAN_MISMATCH)'],
            ['5', 'Notifications', 'notifications', 'Événement normal mais important (ex: %LINEPROTO-5-UPDOWN, config changée)'],
            ['6', 'Informational', 'informational', 'Messages d’information générale'],
            ['7', 'Debugging', 'debugging', 'Sorties détaillées des commandes debug']
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
    badge: 'Cours Complet • Modules 21 à 22',
    title: 'Programmabilité Réseau & Automatisation',
    subtitle: 'Formats de données (JSON, XML, YAML), Modèles YANG, Protocoles NETCONF (SSH 830) vs RESTCONF (HTTPS 443) vs gNMI, Python & Outils (Ansible, Puppet, Chef, SaltStack).',
    readingTime: '16 min',
    interactiveType: 'programmability-sim',
    interactiveTitle: 'Comparateur Interactif : Pile YANG (NETCONF vs RESTCONF vs gNMI) & Formats de Données (JSON / XML / YAML)',
    keyNumbers: [
      { label: 'NETCONF Port & Format', value: 'TCP 830 (SSH) • XML', note: 'Utilise des appels RPC (<get-config>, <edit-config>)' },
      { label: 'RESTCONF Port & Format', value: 'TCP 443 (HTTPS) • JSON/XML', note: 'Utilise les méthodes HTTP (GET, POST, PUT, PATCH, DELETE)' },
      { label: 'Ansible Architecture', value: 'Agentless • Push • YAML', note: 'Utilise SSH / NETCONF sans installer d’agent sur le routeur' },
      { label: 'Puppet / Chef', value: 'Agent-based • Pull • Ruby', note: 'L’agent sur l’équipement interroge périodiquement le Master' }
    ],
    sections: [
      {
        id: 'prog-data-yang',
        tag: 'Module 21',
        title: '1. Formats de Sérialisation (JSON, XML, YAML) & Modèles de Données YANG',
        summary: 'Identifier instantanément la syntaxe JSON, XML et YAML, et comprendre le rôle des modèles YANG (IETF, OpenConfig, Native).',
        bullets: [
          '<strong>Les 3 formats de structuration de données</strong> :<ul><li><strong>JSON (JavaScript Object Notation)</strong> : ultra-léger, utilisé par la majorité des APIs REST et RESTCONF. Utilise des <strong>accolades <code>{ "clé": "valeur" }</code></strong> pour les objets (dictionnaires en Python) et des <strong>crochets <code>[ ... ]</code></strong> pour les listes ordonnées (tableaux). Les chaînes doivent être entourées de guillemets doubles <code>" "</code>.</li><li><strong>XML (eXtensible Markup Language)</strong> : structuré en arbre de balises ouvrantes et fermantes <code>&lt;interface&gt;...&lt;/interface&gt;</code> avec attributs et espaces de noms (<code>xmlns</code>). Format natif obligatoire de <strong>NETCONF</strong>.</li><li><strong>YAML (YAML Ain’t Markup Language)</strong> : conçu pour être très lisible par l’humain, commence souvent par <code>---</code>, repose sur l’<strong>indentation stricte par espaces</strong> (jamais de tabulations) et des tirets <code>-</code> pour les listes. Utilisé pour les <strong>Playbooks Ansible</strong>.</li></ul>',
          '<strong>YANG (Yet Another Next Generation — RFC 6020 / 7950)</strong> :<ul><li>Langage de <strong>modélisation de données</strong> qui définit la structure hiérarchique, les types de données (<code>string</code>, <code>uint32</code>, <code>inet:ipv4-address</code>) et les contraintes des données de configuration (<code>config true</code>) et d’état opérationnel (<code>config false</code>).</li><li>YANG n’est <em>pas</em> un protocole de transport : ses modèles sont transportés par <strong>NETCONF, RESTCONF ou gNMI</strong>.</li><li><strong>Les 3 origines de modèles YANG</strong> : <strong>IETF</strong> (standards RFC officiels, ex: <code>ietf-interfaces</code>), <strong>OpenConfig</strong> (initié par les grands opérateurs/cloud pour des modèles multi-constructeurs unifiés) et <strong>Native (Vendor-specific)</strong> (propres à Cisco IOS-XE / IOS-XR / NX-OS pour accéder à 100% des fonctions spécifiques).</li></ul>'
        ]
      },
      {
        id: 'prog-netconf-restconf',
        tag: 'Module 21 & 22',
        title: '2. Protocoles Pilotés par Modèles : NETCONF, RESTCONF & Streaming Telemetry (gNMI)',
        summary: 'Comparer les opérations RPC de NETCONF sur SSH 830 avec les verbes HTTP CRUD de RESTCONF sur HTTPS 443.',
        bullets: [
          '<strong>NETCONF (RFC 6241)</strong> :<ul><li>Transport : <strong>SSH sur TCP port 830</strong>. Encodage des données : <strong>XML uniquement</strong>.</li><li>Fonctionne par messages <strong>RPC (<code>&lt;rpc&gt;</code> et <code>&lt;rpc-reply&gt;</code>)</strong> et distingue plusieurs <strong>Datastores</strong> : <code>&lt;running&gt;</code>, <code>&lt;candidate&gt;</code> (brouillon validé par commit) et <code>&lt;startup&gt;</code>.</li><li><strong>Opérations clés NETCONF</strong> : <code>&lt;get&gt;</code> (récupère config + état opérationnel), <code>&lt;get-config&gt;</code> (récupère uniquement la configuration), <code>&lt;edit-config&gt;</code> (modifie la configuration), <code>&lt;copy-config&gt;</code>, <code>&lt;delete-config&gt;</code>, <code>&lt;lock&gt;</code> / <code>&lt;unlock&gt;</code> (verrouille un datastore pour éviter les conflits d’écriture simultanée).</li></ul>',
          '<strong>RESTCONF (RFC 8040)</strong> :<ul><li>Interface <strong>RESTful sans état (Stateless)</strong> permettant d’accéder aux modèles YANG via <strong>HTTPS (TCP port 443)</strong>.</li><li>Accepte les formats <strong>JSON</strong> (<code>application/yang-data+json</code>) et <strong>XML</strong> (<code>application/yang-data+xml</code>) via les en-têtes HTTP <code>Accept</code> et <code>Content-Type</code>.</li><li>Ne supporte pas les verrous (<code>&lt;lock&gt;</code>) ni les transactions multi-équipements, mais est beaucoup plus simple à consommer depuis Python (<code>requests</code>), Postman ou JavaScript.</li></ul>',
          '<strong>Model-Driven Telemetry (MDT) vs SNMP</strong> : remplace le polling SNMP lent (<em>Pull</em>) par un flux continu poussé par le routeur (<em>Push / Streaming</em>) en <strong>gRPC / gNMI</strong> (Protobuf sur HTTP/2) ou NETCONF, soit à intervalle régulier (<strong>Periodic / Cadence</strong>), soit instantanément dès qu’un état change (<strong>On-Change</strong>).'
        ],
        table: {
          headers: ['Action CRUD', 'Opération NETCONF (XML / SSH 830)', 'Méthode HTTP RESTCONF (JSON ou XML / HTTPS 443)'],
          rows: [
            ['Lire (Read)', '<get> (config + état) ou <get-config> (config seule)', 'GET'],
            ['Créer (Create)', '<edit-config> (operation="create")', 'POST'],
            ['Créer ou Remplacer complètement', '<edit-config> (operation="replace")', 'PUT'],
            ['Modifier partiellement (Merge)', '<edit-config> (operation="merge")', 'PATCH'],
            ['Supprimer (Delete)', '<edit-config> (operation="delete" / "remove")', 'DELETE']
          ]
        },
        cli: `! Activer NETCONF (port 830) et RESTCONF (port 443) sur Cisco IOS-XE
Router(config)# netconf-yang
Router(config)# restconf
Router(config)# ip http secure-server`
      },
      {
        id: 'prog-tools-python',
        tag: 'Module 22',
        title: '3. Outils d’Automatisation (Ansible, Puppet, Chef, SaltStack) & Python IOS-XE',
        summary: 'Retenir la matrice comparative exacte demandée à l’examen : Agentless vs Agent, Push vs Pull, langage de fichier et port de communication.',
        bullets: [
          '<strong>Ansible</strong> : <strong>Agentless</strong> (aucun logiciel à installer sur les routeurs/switches Cisco), modèle <strong>Push</strong>, utilise <strong>SSH (TCP 22) ou NETCONF (TCP 830)</strong>, fichiers de configuration appelés <strong>Playbooks</strong> écrits en <strong>YAML</strong> + fichier d’inventaire (<code>hosts</code>). Principe d’<strong>idempotence</strong> (exécuter un playbook 10 fois ne modifie l’équipement que si son état réel diffère de l’état désiré).',
          '<strong>Puppet</strong> : <strong>Agent-based</strong> (ou proxy agent pour équipements réseau), modèle <strong>Pull</strong> (l’agent contacte régulièrement le Puppet Master sur <strong>TCP 8140</strong>), fichiers appelés <strong>Manifests</strong> écrits en <strong>Ruby DSL</strong>.',
          '<strong>Chef</strong> : <strong>Agent-based</strong> (Chef Client interroge le Chef Server en <strong>Pull</strong>), fichiers appelés <strong>Recipes</strong> et regroupés en <strong>Cookbooks</strong> écrits en <strong>Ruby DSL</strong>, gérés depuis la station de travail via l’outil CLI <code>knife</code>.',
          '<strong>SaltStack (Salt)</strong> : architecture <strong>Salt Master / Salt Minion</strong> (supporte aussi le mode sans agent <code>salt-ssh</code>), bus de messages ultra-rapide ZeroMQ en <strong>Push & Pull (Event-driven)</strong>, fichiers d’état appelés <strong>SLS (SaLt State)</strong> écrits en <strong>YAML</strong>.',
          '<strong>Python sur Cisco IOS-XE (Guest Shell)</strong> : conteneur Linux LXC sécurisé embarqué sur IOS-XE (activé avec <code>iox</code> puis <code>guestshell enable</code>). Le module Python interne <code>import cli</code> permet d’exécuter des commandes IOS directement depuis un script local (<code>cli.execute("show version")</code>, <code>cli.configure(["interface Loopback99", "ip address 99.99.99.99 255.255.255.255"])</code>).'
        ],
        table: {
          headers: ['Outil', 'Architecture sur l’équipement', 'Modèle d’exécution', 'Format des fichiers', 'Transport Réseau'],
          rows: [
            ['Ansible', '✅ Agentless (Sans agent)', 'Push (le contrôleur pousse)', 'YAML (Playbooks)', 'SSH (TCP 22) / NETCONF (830) / API'],
            ['Puppet', 'Agent-based (ou Proxy Agent)', 'Pull (l’agent tire la config)', 'Ruby DSL (Manifests .pp)', 'HTTPS (TCP 8140)'],
            ['Chef', 'Agent-based (Chef Client)', 'Pull (l’agent tire la config)', 'Ruby DSL (Recipes / Cookbooks)', 'HTTPS (TCP 443 / 10002)'],
            ['SaltStack', 'Agent (Minion) ou Agentless (salt-ssh)', 'Push & Pull (Event-driven)', 'YAML (Fichiers .sls / Pillars)', 'ZeroMQ (TCP 4505 / 4506) ou SSH']
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
    badge: 'Cours Complet • Modules 23 à 26',
    title: 'Software-Defined Networking (SDN, SD-Access & SD-WAN)',
    subtitle: 'Cisco Catalyst Center (IBN), Cisco SD-Access (LISP, VXLAN, TrustSec SGT), Cisco Catalyst SD-WAN (vBond, vManage, vSmart, WAN Edge, OMP) & REST APIs.',
    readingTime: '22 min',
    interactiveType: 'sdn-sim',
    interactiveTitle: 'Architecture Interactive : Fabric Cisco SD-Access (LISP + VXLAN + TrustSec) & Les 4 Plans Cisco Catalyst SD-WAN',
    keyNumbers: [
      { label: 'SD-Access Control Plane', value: 'LISP (EID → RLOC)', note: 'Sépare l’identité de l’hôte (EID) de sa localisation (RLOC)' },
      { label: 'SD-Access Data Plane', value: 'VXLAN (UDP 4789)', note: 'VNI 24 bits (16M segments) + transporte le SGT TrustSec' },
      { label: 'SD-WAN Control Protocol', value: 'OMP (via vSmart)', note: 'Échange routes (vRoutes), TLOCs, clés IPsec et politiques' },
      { label: 'Codes HTTP REST API', value: '200/201 • 401/403 • 500', note: '2xx = Succès • 401 = Non authentifié • 403 = Interdit • 5xx = Serveur' }
    ],
    sections: [
      {
        id: 'sdn-catalyst-center-ibn',
        tag: 'Module 23',
        title: '1. Architecture SDN, Intent-Based Networking (IBN) & Cisco Catalyst Center',
        summary: 'Séparation du Control Plane et du Data Plane, boucle fermée IBN (Translation, Activation, Assurance) et APIs Northbound vs Southbound.',
        bullets: [
          '<strong>Boucle Intent-Based Networking (IBN) en 3 étapes</strong> :<ul><li><strong>1. Translation</strong> : capture l’intention métier de l’administrateur (ex: « Isoler le trafic IoT du réseau Finance ») et la traduit en politiques réseau abstraites.</li><li><strong>2. Activation</strong> : le contrôleur (Cisco Catalyst Center / DNA Center) provisionne automatiquement les équipements physiques et virtuels via ses interfaces <strong>Southbound</strong>.</li><li><strong>3. Assurance</strong> : collecte en continu la télémétrie, les logs Syslog, SNMP et NetFlow pour vérifier en boucle fermée que le comportement réel du réseau correspond à l’intention initiale (scores de santé client/réseau et remédiation guidée).</li></ul>',
          '<strong>APIs Northbound vs Southbound</strong> :<ul><li><strong>Northbound API (NBI)</strong> : interface exposée par le contrôleur SDN vers le haut (applications, scripts Python, orchestrateurs IT, ServiceNow) — presque toujours une <strong>API RESTful (HTTPS / JSON)</strong>.</li><li><strong>Southbound API (SBI)</strong> : protocoles utilisés par le contrôleur SDN vers le bas pour configurer les switches/routeurs — ex: <strong>NETCONF, RESTCONF, SNMP, SSH/CLI, OpenFlow, OpFlex, CAPWAP</strong>.</li></ul>'
        ]
      },
      {
        id: 'sdn-sd-access',
        tag: 'Module 24',
        title: '2. Cisco SD-Access (SDA) : Underlay, Overlay (LISP + VXLAN) & Rôles Fabric',
        summary: 'Comprendre la combinaison LISP (Control Plane) + VXLAN (Data Plane) + Cisco TrustSec / ISE (Policy Plane) au sein du Campus Fabric.',
        bullets: [
          '<strong>Underlay vs Overlay dans Cisco SD-Access</strong> :<ul><li><strong>Underlay (Réseau physique de transport)</strong> : réseau IP Couche 3 pur (souvent déployé automatiquement avec <strong>IS-IS</strong> ou OSPF via la fonction <em>LAN Automation / Plug-and-Play</em>) dont le seul rôle est d’assurer la connectivité IP entre les adresses Loopback0 (<strong>RLOC</strong>) des switches.</li><li><strong>Overlay (Réseau virtuel Fabric)</strong> : tunnels logiques par-dessus l’Underlay, reposant sur trois piliers :</li></ul>',
          '<strong>Les 3 Piliers technologiques de la Fabric SD-Access</strong> :<ul><li><strong>1. Control Plane = LISP (Locator/ID Separation Protocol)</strong> : sépare l’adresse IP/MAC du terminal client (<strong>EID — Endpoint Identifier</strong>) de l’adresse IP Loopback du switch sur lequel il est branché (<strong>RLOC — Routing Locator</strong>). Remplace l’inondation ARP/Broadcast par une base de données centralisée (Host Tracking Database) interrogée par messages <em>Map-Request / Map-Reply</em> : permet une mobilité transparente des hôtes (Layer 2 et Layer 3 Roaming) !</li><li><strong>2. Data Plane = VXLAN-GPO (Virtual Extensible LAN — UDP 4789)</strong> : encapsule la trame Ethernet complète (Layer 2 et Layer 3) avec un identifiant de réseau virtuel <strong>VNI sur 24 bits</strong> (jusqu’à 16 millions de segments / Virtual Networks) et transporte directement le <strong>SGT (Scalable Group Tag, 16 bits)</strong> dans l’en-tête VXLAN.</li><li><strong>3. Policy Plane = Cisco ISE & TrustSec (SGT / SGACL)</strong> : attribue à chaque utilisateur ou objet connecté un groupe de sécurité <strong>SGT</strong> (ex: <em>Employés = 10</em>, <em>Imprimantes = 20</em>) lors de l’authentification 802.1X/MAB. Les règles de filtrage (<strong>SGACL</strong>) s’appliquent entre groupes SGT, indépendamment des adresses IP !</li></ul>',
          '<strong>Rôles des équipements dans une Fabric SD-Access</strong> :<ul><li><strong>Fabric Edge Node</strong> : switch d’accès où se connectent les terminaux filaires et APs. Enregistre les EIDs auprès du Control Plane Node et encapsule/décapsule les paquets VXLAN.</li><li><strong>Control Plane Node</strong> : héberge le <strong>LISP Map-Server / Map-Resolver (MS/MR)</strong> qui garde la table de correspondance <code>EID → RLOC</code> de tous les hôtes de la Fabric.</li><li><strong>Fabric Border Node</strong> : porte d’entrée/sortie reliant la Fabric SD-Access au reste du monde (Data Center, WAN, Internet). Traduit le contexte VRF/SGT vers le réseau externe.</li><li><strong>Intermediate Node</strong> : switch de distribution/core purement Underlay qui achemine les paquets IP encapsulés en VXLAN entre les Edge Nodes et les Border Nodes sans décapsuler VXLAN.</li><li><strong>Fabric WLC</strong> : contrôleur sans-fil intégré au plan de contrôle LISP (le trafic data des APs Fabric est encapsulé directement en VXLAN par l’AP vers le Fabric Edge switch !).</li></ul>'
        ],
        table: {
          headers: ['Plan / Composant SD-Access', 'Protocole / Technologie', 'Rôle Exact dans la Fabric'],
          rows: [
            ['Underlay Network', 'IS-IS ou OSPF (Routed Access L3)', 'Achemine les paquets IP entre les adresses Loopback (RLOC) des switches'],
            ['Overlay Control Plane', 'LISP (Map-Server / Map-Resolver)', 'Résout l’identité d’un hôte (EID) vers le switch où il se trouve (RLOC)'],
            ['Overlay Data Plane', 'VXLAN-GPO (UDP Port 4789)', 'Encapsule la trame L2/L3 + transporte le VNI (VN/VRF) et le tag SGT'],
            ['Overlay Policy Plane', 'Cisco ISE + TrustSec (SGT & SGACL)', 'Micro-segmentation basée sur les rôles (SGT) indépendante des sous-réseaux IP']
          ]
        }
      },
      {
        id: 'sdn-sd-wan-rest',
        tag: 'Modules 25 & 26',
        title: '3. Cisco Catalyst SD-WAN (vBond, vManage, vSmart, WAN Edge, OMP) & REST APIs',
        summary: 'Distinguer les 4 plans de l’architecture SD-WAN (Viptela), le protocole OMP et les fondamentaux des APIs REST.',
        bullets: [
          '<strong>Les 4 Plans de l’architecture Cisco Catalyst SD-WAN</strong> :<ul><li><strong>1. Orchestration Plane — Cisco vBond (SD-WAN Validator)</strong> : point de contact initial lors du <em>Zero-Touch Provisioning (ZTP)</em>. Authentifie les routeurs WAN Edge et les contrôleurs, facilite la traversée du NAT (STUN) et indique à chaque routeur l’adresse des vManage et vSmart. C’est le seul composant nécessitant impérativement une <strong>adresse IP publique</strong>.</li><li><strong>2. Management Plane — Cisco vManage (SD-WAN Manager)</strong> : interface graphique (GUI) centralisée et API REST permettant de créer les Templates de configuration, visualiser les tableaux de bord, pousser les politiques et mettre à jour les logiciels.</li><li><strong>3. Control Plane — Cisco vSmart (SD-WAN Controller)</strong> : le « cerveau » de la fabric SD-WAN. Établit des tunnels permanents <strong>DTLS / TLS</strong> avec chaque routeur WAN Edge et utilise le protocole <strong>OMP (Overlay Management Protocol)</strong> pour distribuer les routes (<em>vRoutes</em>), les <strong>TLOCs (Transport Locators)</strong>, les clés de chiffrement IPsec et les politiques centralisées. ⚠️ <strong>vSmart ne voit et ne transporte JAMAIS le trafic de données des utilisateurs !</strong></li><li><strong>4. Data Plane — WAN Edge (vEdge / cEdge IOS-XE)</strong> : routeurs physiques ou virtuels des sites distants. Établissent des tunnels <strong>IPsec</strong> directs de site à site pour le trafic utilisateur et utilisent <strong>BFD (Bidirectional Forwarding Detection)</strong> à l’intérieur de chaque tunnel IPsec pour mesurer en temps réel la perte, la latence et la gigue (App-Aware Routing).</li></ul>',
          '<strong>Authentification & Codes de Statut des APIs REST</strong> :<ul><li><strong>Codes HTTP</strong> : <code>200 OK</code> (succès GET/PUT/PATCH), <code>201 Created</code> (ressource créée par POST), <code>204 No Content</code> (succès DELETE), <code>400 Bad Request</code> (syntaxe JSON invalide), <code>401 Unauthorized</code> (non authentifié / token manquant ou expiré), <code>403 Forbidden</code> (authentifié mais droits insuffisants), <code>404 Not Found</code> (URI inexistante), <code>429 Too Many Requests</code> (Rate Limiting), <code>500 / 503</code> (erreur interne du serveur).</li><li><strong>Sur Cisco Catalyst Center</strong> : on effectue d’abord un <code>POST /dna/system/api/v1/auth/token</code> avec <strong>HTTP Basic Auth</strong> (login:password en Base64) pour récupérer un jeton JWT que l’on passe ensuite dans l’en-tête <strong><code>X-Auth-Token</code></strong> des requêtes suivantes.</li></ul>'
        ],
        table: {
          headers: ['Composant SD-WAN', 'Plan Architectural', 'Protocoles Utilisés', 'Fonction Clé à Retenir'],
          rows: [
            ['vBond (Validator)', 'Orchestration Plane', 'DTLS / TLS, STUN', 'Authentification initiale ZTP, NAT Traversal, aiguillage vers vManage/vSmart'],
            ['vManage (Manager)', 'Management Plane', 'NETCONF, HTTPS/REST, DTLS/TLS', 'Single Pane of Glass (GUI), Templates de configuration, Monitoring & Alertes'],
            ['vSmart (Controller)', 'Control Plane', 'OMP sur DTLS / TLS', 'Réflecteur de routes SD-WAN (vRoutes, TLOCs, clés IPsec, Policies)'],
            ['WAN Edge (cEdge / vEdge)', 'Data Plane', 'IPsec, BFD, OMP (vers vSmart)', 'Achemine le trafic utilisateur entre sites via tunnels IPsec supervisés par BFD']
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
    badge: 'Méga-Synthèse • Final Exam 350-401',
    title: 'Synthèse Générale — CCNP ENCOR v9 (350-401)',
    subtitle: 'Tous les tableaux de référence rapide, valeurs par défaut, numéros de ports, adresses Multicast et pièges classiques de l’examen final CCNP ENCOR v9.',
    readingTime: '15 min',
    interactiveType: 'ccnp-final-sim',
    interactiveTitle: 'Référence Rapide Interactive : Distances Administratives, Adresses Multicast & Ports/Protocoles Cisco',
    keyNumbers: [
      { label: 'Architecture & Virt.', value: '15% + 10%', note: 'Campus 3-Tier, CEF/TCAM, SD-Access, SD-WAN, VRF, GRE/IPsec' },
      { label: 'Infrastructure (L2/L3)', value: '30% de l’examen', note: '802.1Q, RSTP/MST, LACP, HSRP/VRRP/GLBP, OSPF, EIGRP, BGP' },
      { label: 'Sécurité & Assurance', value: '20% + 10%', note: 'CoPP, DHCP Snooping/DAI, AAA TACACS+/RADIUS, 802.1X, NetFlow, SPAN' },
      { label: 'Automation & APIs', value: '15% de l’examen', note: 'JSON/XML/YAML, YANG, NETCONF (830), RESTCONF (443), Ansible/Puppet' }
    ],
    sections: [
      {
        id: 'final-cheat-sheet',
        tag: 'Référence Rapide',
        title: '1. Les Points Décisifs qui Tombent Systématiquement au Final Exam ENCOR',
        summary: 'Récapitulatif condensé des règles de départage et valeurs numériques à vérifier avant de lancer les 60 questions du Mode Examen Final.',
        bullets: [
          '<strong>Commutation & FHRP</strong> :<ul><li>En <strong>RSTP (802.1w)</strong>, les états sont <code>Discarding</code>, <code>Learning</code>, <code>Forwarding</code>. Les rôles sont <code>Root</code>, <code>Designated</code>, <code>Alternate</code> (secours vers le Root) et <code>Backup</code> (segment partagé).</li><li>En <strong>EtherChannel</strong>, <code>Auto + Auto</code> (PAgP) ou <code>Passive + Passive</code> (LACP) ne forme <strong>jamais</strong> de canal. <code>On + Active/Desirable</code> provoque une erreur/boucle.</li><li>En <strong>HSRP</strong>, le routeur Active a la plus haute priorité (défaut 100), puis la plus haute IP. <strong>Preempt est désactivé par défaut</strong> en HSRP, mais <strong>activé par défaut</strong> en VRRP. <strong>GLBP</strong> répartit activement la charge entre 1 AVG et jusqu’à 4 AVF.</li></ul>',
          '<strong>Routage OSPF & BGP</strong> :<ul><li>En <strong>OSPF</strong>, l’ordre de sélection est <code>O</code> (Intra-Area) > <code>O IA</code> (Inter-Area) > <code>O N1 / E1</code> > <code>O N2 / E2</code>. Pour bloquer les LSA 3, 4 et 5 et n’avoir qu’une route par défaut, on configure une aire <strong>Totally Stubby</strong> (<code>area X stub no-summary</code> sur l’ABR).</li><li>En <strong>BGP</strong>, l’ordre est <strong>Weight</strong> (plus grand, local au routeur) > <strong>Local Preference</strong> (plus grand, propagé dans l’AS pour le trafic sortant) > <strong>Locally Originated</strong> > <strong>AS_PATH</strong> (plus court) > <strong>Origin</strong> (<code>i</code> > <code>e</code> > <code>?</code>) > <strong>MED</strong> (plus petit) > <strong>eBGP over iBGP</strong> > <strong>IGP Metric</strong>.</li></ul>',
          '<strong>Sécurité, Services & SDN</strong> :<ul><li><strong>TACACS+</strong> = TCP 49, chiffre tout le corps, sépare AuthN/AuthZ/Acc (Device Admin). <strong>RADIUS</strong> = UDP 1812/1813, chiffre le mot de passe seul, combine AuthN+AuthZ (Network Access 802.1X).</li><li><strong>Syslog</strong> : <code>0</code> Emergencies → <code>7</code> Debugging. <strong>ERSPAN</strong> transporte le trafic miroir en Layer 3 via une encapsulation <strong>GRE</strong>.</li><li><strong>SD-Access</strong> : Underlay (IS-IS) + Control Plane (<strong>LISP</strong> EID-to-RLOC) + Data Plane (<strong>VXLAN</strong> UDP 4789) + Policy Plane (<strong>Cisco ISE / TrustSec SGT</strong>).</li><li><strong>SD-WAN</strong> : <strong>vBond</strong> (Orchestration/ZTP), <strong>vManage</strong> (GUI/Config), <strong>vSmart</strong> (Control Plane / protocole <strong>OMP</strong>), <strong>WAN Edge</strong> (Data Plane / IPsec + BFD).</li></ul>'
        ]
      }
    ]
  },

  // ===========================================================================
  // FINAL EXAM : CCNA 1 V7.0 — INTRODUCTION TO NETWORKS (ITN)
  // ===========================================================================
  'ccna-1-v7-final': {
    courseId: 'ccna-1-v7-final',
    badge: 'Cours Complet • CCNA 1 v7.0 (ITN)',
    title: 'Fondamentaux des Réseaux — CCNA 1 v7.0 (ITN)',
    subtitle: 'Modèles OSI (7 couches) & TCP/IP, Encapsulation PDU, Ethernet & ARP, Adressage IPv4 & Calcul de Sous-Réseaux / VLSM, IPv6 (GUA/LLA/SLAAC), ICMP & Couche Transport (TCP/UDP).',
    readingTime: '25 min',
    interactiveType: 'ccna1-sim',
    interactiveTitle: 'Atelier Interactif CCNA 1 : Modèle OSI & Encapsulation PDU (Couches 1 à 7) + Calculateur Visuel de Sous-Réseaux IPv4 (/24 à /30)',
    keyNumbers: [
      { label: 'Taille Trame Ethernet', value: '64 à 1518 octets', note: '< 64 octets = Runt Frame • > 1518 octets = Giant Frame' },
      { label: 'Formule Hôtes IPv4', value: '2^h - 2 hôtes', note: '/24=254 • /25=126 • /26=62 • /27=30 • /28=14 • /29=6 • /30=2' },
      { label: 'Préfixes IPv6 Clés', value: '2000::/3 & FE80::/10', note: '2000::/3 = Global Unicast (GUA) • FE80::/10 = Link-Local (LLA)' },
      { label: 'Plages de Ports TCP/UDP', value: '0–1023 (Well-Known)', note: '1024–49151 = Registered • 49152–65535 = Dynamic / Private' }
    ],
    sections: [
      {
        id: 'ccna1-osi-ethernet',
        tag: 'Chapitres 1 à 7',
        title: '1. Modèles OSI (7 Couches) & TCP/IP, Câblage et Commutation Ethernet',
        summary: 'Maîtriser le rôle de chaque couche, le nom exact des PDUs, les méthodes de commutation (Store-and-Forward vs Cut-Through) et la structure d’une trame Ethernet.',
        bullets: [
          '<strong>Encapsulation & Unités de Données de Protocole (PDU)</strong> :<ul><li><strong>Couches 7, 6, 5 (Application, Présentation, Session)</strong> → PDU = <strong>Données (Data)</strong>.</li><li><strong>Couche 4 (Transport — TCP/UDP)</strong> → PDU = <strong>Segment</strong> (TCP) ou <strong>Datagramme</strong> (UDP). Adressage : <strong>Numéros de ports source et destination</strong>.</li><li><strong>Couche 3 (Réseau / Internet — IPv4/IPv6)</strong> → PDU = <strong>Paquet (Packet)</strong>. Adressage logique de bout-en-bout : <strong>Adresse IP Source et Destination</strong> (ne change pas d’un bout à l’autre du trajet, hors NAT).</li><li><strong>Couche 2 (Liaison de données — Ethernet / WLAN)</strong> → PDU = <strong>Trame (Frame)</strong>. Sous-couches <strong>LLC (802.2)</strong> (identifie le protocole L3 via le champ Type) et <strong>MAC (802.3)</strong>. Adressage physique local : <strong>Adresse MAC Source et Destination</strong> (réécrite à chaque saut de routeur !).</li><li><strong>Couche 1 (Physique)</strong> → PDU = <strong>Bits</strong> (impulsions électriques sur cuivre UTP, lumière sur fibre optique, ondes radio en Wi-Fi).</li></ul>',
          '<strong>Câblage Cuivre (UTP RJ-45) vs Fibre Optique (LC/SC/ST)</strong> :<ul><li>Le torsadage des paires de fils dans un câble UTP sert à <strong>annuler la diaphonie (Crosstalk)</strong> et les interférences électromagnétiques (EMI/RFI). L’<strong>atténuation</strong> est la perte de puissance du signal avec la distance.</li><li>La <strong>fibre optique</strong> est totalement <strong>immunisée contre les EMI/RFI et la diaphonie</strong>, et offre une très grande portée : <strong>Multimode (MMF)</strong> (LED/Laser VCSEL, cœur plus large 50/62.5 µm, plusieurs chemins lumineux, jusqu’à 550m) vs <strong>Monomode (SMF)</strong> (Laser, cœur 9 µm, un seul rayon droit, plusieurs dizaines de kilomètres).</li></ul>',
          '<strong>Commutation Ethernet : Store-and-Forward vs Cut-Through</strong> :<ul><li><strong>Store-and-Forward</strong> : stocke <strong>toute la trame</strong> en mémoire tampon, vérifie sa longueur et calcule le <strong>CRC (dans le champ FCS)</strong> avant de la transmettre. Élimine 100% des trames corrompues ou <em>runts</em>, indispensable pour la QoS.</li><li><strong>Cut-Through</strong> : latence minimale.<ul><li><em>Fast-Forward</em> : commence à transmettre la trame dès la lecture des <strong>6 premiers octets de l’adresse MAC de destination</strong> (sans vérifier le FCS → peut propager des trames invalides).</li><li><em>Fragment-Free</em> : attend les <strong>64 premiers octets</strong> de la trame avant de transférer (élimine la majorité des collisions / <em>runt frames</em>).</li></ul></li></ul>'
        ],
        table: {
          headers: ['Type d’adresse MAC Ethernet (48 bits / 12 Hex)', 'Format Hexadécimal', 'Comportement d’un Switch L2'],
          rows: [
            ['Unicast', 'Unique (OUI 24 bits vendeur + 24 bits NIC)', 'Envoie uniquement sur le port associé dans la table MAC (ou Flood si inconnu)'],
            ['Broadcast', 'FF-FF-FF-FF-FF-FF (tous les bits à 1)', 'Inonde (Flood) sur TOUS les ports du VLAN sauf le port de réception'],
            ['Multicast IPv4 / IPv6', '01-00-5E-xx-xx-xx (IPv4) / 33-33-xx-xx-xx-xx (IPv6)', 'Inonde sur tous les ports (sauf si IGMP Snooping est actif)']
          ]
        }
      },
      {
        id: 'ccna1-ipv4-subnetting',
        tag: 'Chapitres 8 à 11',
        title: '2. ARP, Routage par Défaut, Adressage IPv4 & Calcul de Sous-Réseaux (VLSM)',
        summary: 'Comprendre ce qui change entre deux réseaux (MAC vs IP), les plages privées RFC 1918 et la méthode rapide de calcul de sous-réseaux /24 à /30.',
        bullets: [
          '<strong>Règle fondamentale ARP & Passerelle par Défaut (Question récurrente du Final Exam !)</strong> :<ul><li>Lorsqu’un Hôte A envoie un paquet vers un Hôte B situé sur un <strong>réseau distant</strong> :<ul><li><strong>Adresse IP Source</strong> = IP de l’Hôte A | <strong>Adresse IP Destination</strong> = IP de l’Hôte B (les IP ne changent PAS).</li><li><strong>Adresse MAC Source</strong> = MAC de l’Hôte A | <strong>Adresse MAC Destination</strong> = <strong>MAC de l’interface locale du Routeur (Default Gateway)</strong> ! Si l’Hôte A ne la connaît pas, il envoie une <strong>requête ARP en Broadcast (<code>FF:FF:FF:FF:FF:FF</code>) pour demander la MAC de sa passerelle par défaut</strong> (et non celle de l’hôte distant).</li></ul></li></ul>',
          '<strong>Adresses IPv4 Spéciales & Privées (RFC 1918)</strong> :<ul><li><strong>Plages Privées (non routables sur Internet, nécessitent du NAT)</strong> : Classe A <code>10.0.0.0/8</code> (<code>10.0.0.0</code> – <code>10.255.255.255</code>), Classe B <code>172.16.0.0/12</code> (<code>172.16.0.0</code> – <code>172.31.255.255</code>), Classe C <code>192.168.0.0/16</code> (<code>192.168.0.0</code> – <code>192.168.255.255</code>).</li><li><strong>Loopback</strong> : <code>127.0.0.0/8</code> (ex: <code>127.0.0.1</code> — teste la pile TCP/IP locale de l’hôte).</li><li><strong>Link-Local / APIPA</strong> : <code>169.254.0.0/16</code> (auto-attribuée par Windows si aucun serveur DHCP ne répond).</li><li><strong>Expérimentale (Classe E)</strong> : <code>240.0.0.0</code> à <code>255.255.255.254</code>.</li></ul>',
          '<strong>Méthode express de Subnetting IPv4 & VLSM</strong> :<ul><li>Pour un préfixe <code>/P</code>, le nombre de bits d’hôtes restants est <code>h = 32 - P</code>.</li><li>Le nombre d’<strong>adresses d’hôtes utilisables</strong> est toujours <strong><code>2^h - 2</code></strong> (on retire la 1ère adresse = <strong>Adresse Réseau</strong> [tous les bits hôtes à 0] et la dernière adresse = <strong>Adresse de Broadcast</strong> [tous les bits hôtes à 1]).</li><li>En <strong>VLSM</strong>, on commence toujours par attribuer le sous-réseau au <strong>segment qui a besoin du plus grand nombre d’hôtes</strong>, jusqu’aux liens point-à-point WAN entre routeurs qui utilisent un <strong><code>/30</code></strong> (4 adresses au total, <strong>2 hôtes utilisables</strong>).</li></ul>'
        ],
        table: {
          headers: ['Préfixe CIDR', 'Masque Décimal', 'Pas (Block Size)', 'Total Adresses (2^h)', 'Hôtes Utilisables (2^h - 2)', 'Usage Typique'],
          rows: [
            ['/24', '255.255.255.0', '256 (1 sous-réseau)', '256', '254 hôtes', 'LAN standard de ~200 postes'],
            ['/25', '255.255.255.128', '128 (.0 et .128)', '128', '126 hôtes', 'Grand département (65 à 126 hôtes)'],
            ['/26', '255.255.255.192', '64 (.0, .64, .128, .192)', '64', '62 hôtes', 'Sous-réseau moyen (31 à 62 hôtes)'],
            ['/27', '255.255.255.224', '32 (.0, .32, .64, .96...)', '32', '30 hôtes', 'Petit service (15 à 30 hôtes)'],
            ['/28', '255.255.255.240', '16 (.0, .16, .32, .48...)', '16', '14 hôtes', 'Petit groupe / salle (7 à 14 hôtes)'],
            ['/29', '255.255.255.248', '8 (.0, .8, .16, .24...)', '8', '6 hôtes', 'Zone DMZ serveurs (3 à 6 hôtes)'],
            ['/30', '255.255.255.252', '4 (.0, .4, .8, .12...)', '4', '2 hôtes', 'Lien WAN Point-à-Point entre 2 routeurs']
          ]
        }
      },
      {
        id: 'ccna1-ipv6-icmp',
        tag: 'Chapitres 12 & 13',
        title: '3. Adressage IPv6 (128 bits), Compression, SLAAC & ICMPv6 (RS/RA/NS/NA)',
        summary: 'Identifier les types d’adresses IPv6 (GUA, LLA, Loopback, Multicast), appliquer les 2 règles de compression et comprendre l’auto-configuration SLAAC.',
        bullets: [
          '<strong>Les 2 Règles de Compression d’une adresse IPv6 (8 hextets de 16 bits)</strong> :<ul><li><strong>Règle 1 (Omission des zéros de tête)</strong> : on peut supprimer les zéros situés au début de chaque hextet (ex: <code>0db8</code> → <code>db8</code>, <code>0000</code> → <code>0</code>).</li><li><strong>Règle 2 (Double deux-points <code>::</code>)</strong> : remplace une suite contiguë d’un ou plusieurs hextets entièrement à zéro. ⚠️ <strong><code>::</code> ne peut être utilisé qu’UNE SEULE FOIS</strong> dans une adresse IPv6 (sinon l’adresse deviendrait ambiguë).</li></ul>',
          '<strong>Types d’adresses IPv6 indispensables à reconnaître</strong> :<ul><li><strong>Global Unicast Address (GUA — <code>2000::/3</code>)</strong> : commence par <code>2</code> ou <code>3</code> (ex: <code>2001:db8:...</code>). Publique et routable sur Internet (équivalent d’une IPv4 publique). Structure standard : Global Routing Prefix (48 bits) + <strong>Subnet ID (16 bits)</strong> = préfixe réseau <strong><code>/64</code></strong> + Interface ID (64 bits).</li><li><strong>Link-Local Address (LLA — <code>FE80::/10</code>)</strong> : commence par <code>FE80</code>. <strong>Obligatoire sur chaque interface IPv6 active</strong>, non routable au-delà du lien local, souvent utilisée comme adresse de <strong>passerelle par défaut</strong> des hôtes du LAN.</li><li><strong>Loopback</strong> : <strong><code>::1/128</code></strong> (127 zéros suivis d’un 1). Adresse <strong>Non spécifiée</strong> : <code>::/128</code>.</li><li><strong>Unique Local (ULA — <code>FC00::/7</code> / <code>FD00::/8</code>)</strong> : équivalent des adresses privées RFC 1918 en IPv6.</li><li><strong>Multicast (<code>FF00::/8</code>)</strong> : remplace totalement le Broadcast en IPv6 ! <code>FF02::1</code> = Tous les nœuds (hôtes + routeurs) du lien ; <code>FF02::2</code> = Tous les routeurs du lien (activé dès qu’on tape <code>ipv6 unicast-routing</code>).</li></ul>',
          '<strong>ICMPv6 Neighbor Discovery (NDP) & Auto-configuration SLAAC</strong> :<ul><li><strong>RS (Router Solicitation) & RA (Router Advertisement)</strong> : un hôte qui démarre envoie un <strong>RS</strong> à <code>FF02::2</code> pour découvrir les routeurs. Le routeur répond par un <strong>RA</strong> (envoyé aussi périodiquement à <code>FF02::1</code>) contenant le préfixe <code>/64</code>, la passerelle par défaut et la méthode d’attribution :<ul><li><strong>SLAAC seul</strong> : l’hôte génère lui-même son Interface ID de 64 bits (soit aléatoirement sous Windows, soit en <strong>EUI-64</strong> en insérant <strong><code>FFFE</code></strong> au milieu de sa MAC 48 bits et en <strong>inversant le 7e bit U/L</strong>).</li><li><strong>Stateless DHCPv6 (SLAAC + DHCPv6)</strong> : l’hôte crée son IP via le RA (SLAAC), mais demande l’adresse du serveur DNS à un serveur DHCPv6.</li><li><strong>Stateful DHCPv6</strong> : le RA indique à l’hôte de demander son adresse IPv6 complète et ses paramètres DNS à un serveur DHCPv6.</li></ul></li><li><strong>NS (Neighbor Solicitation) & NA (Neighbor Advertisement)</strong> : remplacent le protocole ARP en IPv6 pour résoudre une adresse IPv6 en adresse MAC (et pour la détection d’adresse dupliquée <strong>DAD</strong>) !</li></ul>'
        ]
      },
      {
        id: 'ccna1-transport-ios',
        tag: 'Chapitres 14 à 17',
        title: '4. Couche Transport (TCP vs UDP), Ports Célèbres & Commandes Cisco IOS',
        summary: 'Comparer TCP (fiable, orienté connexion, 3-Way Handshake) et UDP (rapide, sans connexion), mémoriser les ports d’application et sécuriser un équipement Cisco.',
        bullets: [
          '<strong>TCP vs UDP</strong> :<ul><li><strong>TCP (Transmission Control Protocol)</strong> : orienté connexion (<strong>3-Way Handshake</strong> : <code>1. SYN</code> → <code>2. SYN-ACK</code> → <code>3. ACK</code>), livraison garantie par <strong>accusés de réception (ACK) et retransmission</strong>, remise dans l’ordre grâce aux <strong>numéros de séquence</strong>, et contrôle de flux par <strong>taille de fenêtre glissante (Window Size)</strong>. En-tête de <strong>20 octets</strong> minimum. Utilisé par : <strong>HTTP (80), HTTPS (443), FTP (20/21), SSH (22), Telnet (23), SMTP (25), POP3 (110), IMAP (143)</strong>.</li><li><strong>UDP (User Datagram Protocol)</strong> : sans connexion (Connectionless), <em>Best-Effort</em>, aucune retransmission ni contrôle de flux, en-tête ultra-léger de <strong>8 octets</strong> seulement. Idéal pour le temps réel et les requêtes rapides : <strong>VoIP / Streaming vidéo, DHCP (67/68), TFTP (69), SNMP (161/162)</strong>.</li><li><strong>DNS (Port 53)</strong> utilise <strong>à la fois UDP</strong> (requêtes standard rapides < 512 octets) <strong>et TCP</strong> (transferts de zone entre serveurs et réponses volumineuses).</li></ul>',
          '<strong>Modes & Commandes Essentielles Cisco IOS</strong> :<ul><li><code>Router&gt;</code> (User EXEC) → commande <code>enable</code> → <code>Router#</code> (Privileged EXEC) → commande <code>configure terminal</code> → <code>Router(config)#</code> (Global Configuration).</li><li>Chiffrer le mot de passe Privileged EXEC avec hachage fort : <code>enable secret &lt;mdp&gt;</code> (l’emporte toujours sur <code>enable password</code>).</li><li>Chiffrer tous les mots de passe en clair dans la configuration : <code>service password-encryption</code>.</li><li>Pour qu’un <strong>Switch Layer 2</strong> soit administrable à distance via SSH/Telnet depuis un autre sous-réseau, il faut lui configurer : 1) une adresse IP sur son <strong>interface virtuelle SVI</strong> (<code>interface vlan 1</code> + <code>ip address ...</code> + <code>no shutdown</code>) <strong>ET</strong> 2) sa passerelle par défaut avec <code>ip default-gateway &lt;ip-routeur&gt;</code>.</li></ul>'
        ],
        table: {
          headers: ['Protocole Applicatif', 'Port(s)', 'Transport', 'Rôle à l’examen CCNA 1'],
          rows: [
            ['FTP (Data / Control)', '20 / 21', 'TCP', 'Transfert de fichiers (21 = Contrôle, 20 = Données)'],
            ['SSH / Telnet', '22 / 23', 'TCP', 'Accès CLI distant (SSH = chiffré sécurisé, Telnet = texte en clair à proscrire)'],
            ['SMTP / POP3 / IMAP', '25 / 110 / 143', 'TCP', 'Envoi d’e-mails (SMTP) et récupération d’e-mails (POP3 télécharge, IMAP synchronise)'],
            ['DNS', '53', 'UDP & TCP', 'Résout les noms de domaine (ex: cisco.com) en adresses IP'],
            ['DHCP (Serveur / Client)', '67 / 68', 'UDP', 'Attribution dynamique IP/Masque/Passerelle/DNS (DORA : Discover, Offer, Request, Ack)'],
            ['TFTP', '69', 'UDP', 'Transfert de fichiers simple sans authentification (images IOS, configs)'],
            ['HTTP / HTTPS', '80 / 443', 'TCP', 'Navigation Web (HTTPS chiffré via TLS/SSL)']
          ]
        },
        cli: `! Configuration complète d'accès SSH sécurisé et SVI sur un Switch Cisco
Switch(config)# hostname SW-CORE-1
SW-CORE-1(config)# ip domain-name cisco.local
SW-CORE-1(config)# crypto key generate rsa general-keys modulus 2048
SW-CORE-1(config)# username admin secret C1sc0Strong!
SW-CORE-1(config)# enable secret En4bleStr0ng!
SW-CORE-1(config)# service password-encryption
SW-CORE-1(config)# line vty 0 15
SW-CORE-1(config-line)# transport input ssh
SW-CORE-1(config-line)# login local
SW-CORE-1(config-line)# exit
SW-CORE-1(config)# interface vlan 1
SW-CORE-1(config-if)# ip address 192.168.1.2 255.255.255.0
SW-CORE-1(config-if)# no shutdown
SW-CORE-1(config-if)# exit
SW-CORE-1(config)# ip default-gateway 192.168.1.1`
      }
    ]
  }
};
