// Auto-generated fallback bundle so the site also works when opened via file:// without a local HTTP server
window.__EXAM_DATA_BUNDLE__ = {
  "catalog": {
    "siteTitle": "Cisco Exam Prep",
    "categories": [
      {
        "id": "ccnp-v9",
        "name": "CCNP ENCOR v9",
        "shortName": "CCNP V9"
      },
      {
        "id": "ccna",
        "name": "CCNA v7",
        "shortName": "CCNA"
      }
    ],
    "courses": [
      {
        "id": "ccnp-encor-v9-final",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Final Exam",
        "title": "Course Final Exam — CCNP ENCOR (v9)",
        "dataFile": "data/exams/ccnp-encor-v9-final.json",
        "totalQuestions": 63,
        "quizChunkSize": 10,
        "examModeQuestionCount": 60,
        "passingScorePercent": 70,
        "status": "active"
      },
      {
        "id": "ccnp-encor-v9-routing",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 8 – 13",
        "title": "Checkpoint Exam : Network Routing (Modules 8 – 13)",
        "dataFile": "data/exams/ccnp-encor-v9-routing.json",
        "totalQuestions": 45,
        "quizChunkSize": 10,
        "examModeQuestionCount": 45,
        "passingScorePercent": 70,
        "status": "active"
      }
    ]
  },
  "exams": {
    "ccnp-encor-v9-final": {
      "id": "ccnp-encor-v9-final",
      "categoryId": "ccnp-enterprise",
      "categoryName": "CCNP Enterprise",
      "courseCode": "ENCOR v9 (350-401)",
      "title": "CCNP ENCOR (v9) — Course Final Exam",
      "description": "Examen final officiel du cours Cisco CCNP Enterprise: Core Networking (ENCOR v9). Inclut toutes les questions, sorties CLI, schémas, choix multiples et explications détaillées.",
      "sourceUrl": "https://itexamanswers.net/ccnp-encor-v9-course-final-exam-answers.html",
      "lastUpdated": "2026-08-27",
      "quizChunkSize": 10,
      "examModeQuestionCount": 60,
      "examModeDurationMinutes": 90,
      "passingScorePercent": 75,
      "totalQuestions": 63,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "question": "An enterprise is planning to migrate some applications to a public cloud provider while keeping sensitive data on-premises. The network team must ensure secure, reliable connectivity between the on-premises data center and the cloud environment. Which two design considerations are essential for this hybrid cloud deployment? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Extending the on-premises Layer 2 VLANs directly into the cloud provider network",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Replacing all on-premises firewalls with cloud-native security services",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Implementing dedicated private connections such as Direct Connect for consistent performance and security",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Using the same IP addressing scheme in the cloud as on-premises to simplify routing",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Establishing redundant connectivity paths to avoid a single point of failure between on-premises and cloud",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 2,
          "originalNumber": 2,
          "question": "Which three components are part of the Cisco Catalyst SD-WAN control plane? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "vBond orchestrator",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "vManage",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "IPsec tunnels",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "WAN Edge router",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "vSmart controller",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "OMP protocol",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 3,
          "originalNumber": 3,
          "question": "Refer to the exhibit. An engineer is troubleshooting HSRP on two distribution switches. Based on the output, what is the current state of the HSRP configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "DSW1# show standby brief\n                     P indicates configured to preempt.\n                     |\nInterface   Grp  Pri P State   Active          Standby         Virtual IP\nVl10        1    110 P Active  local           192.168.10.3    192.168.10.1\n\nDSW2# show standby brief\n                     P indicates configured to preempt.\n                     |\nInterface   Grp  Pri P State   Active          Standby         Virtual IP\nVl10        1    100   Standby 192.168.10.2    local           192.168.10.1"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "DSW2 is active because DSW1 has preempt disabled",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "DSW1 is active because it has the higher priority and preempt is enabled",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Both switches are in active state causing a split-brain condition",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The configuration is invalid because the virtual IP addresses do not match",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 4,
          "originalNumber": 4,
          "question": "Which statement correctly describes a benefit of the Cisco SD-Access solution?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "It requires all network devices to be upgraded to the latest hardware",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "It provides automated network segmentation based on user identity and group membership",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "It eliminates the need for any underlay network infrastructure",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It replaces the need for Cisco ISE in enterprise deployments",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.5.3",
          "explanation": "Cisco SD-Access uses a single network fabric to automate user and device policies across wired and wireless networks. This design enables software-defined segmentation and policy enforcement that is dynamically based on user identity and group membership through integration with Cisco TrustSec, rather than traditional IP-based or VLAN-based methods. SD-Access requires a physical underlay network for connectivity and integrates with, rather than replaces, Cisco ISE for identity services."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "question": "Refer to the exhibit showing a QoS policy configuration. What is the effect of this policy on voice traffic?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "policy-map WAN-EDGE-OUT\n class VOICE\n  priority percent 10\n  police cir percent 10\n class INTERACTIVE-VIDEO\n  bandwidth percent 25\n class CRITICAL-DATA\n  bandwidth percent 25\n  random-detect dscp-based\n class class-default\n  fair-queue"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Voice traffic receives best-effort treatment with 10% minimum bandwidth",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Voice traffic is guaranteed 10% bandwidth with low-latency queuing and policed to 10%",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Voice traffic is dropped if it exceeds 10% of the bandwidth",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Voice traffic is shaped to 10% of the interface bandwidth",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 6,
          "originalNumber": 6,
          "question": "Which two statements about Cisco SD-WAN vBond orchestrator are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "It serves as the first point of authentication for all SD-WAN components",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "It stores and distributes software images to WAN edge routers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It performs deep packet inspection for security",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It maintains the centralized routing policy database",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "It must be reachable by all SD-WAN devices for initial fabric join",
              "isCorrect": true
            }
          ],
          "topic": "Topic 25.4.0",
          "explanation": "The SD-WAN Validator (vBond) is the first point of contact in the orchestration plane; it uses a zero-trust model to perform initial authentication and authorize all control connections for devices joining the fabric. To facilitate this onboarding process, it must reside in a reachable IP space (public or 1:1 NAT) so that all remote sites and controllers can connect to it; if the Validator is unreachable, no other device can join the overlay."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "question": "Which component of the SD-Access fabric is responsible for registering endpoint EID-to-RLOC mappings?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Fabric edge node",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Fabric border node",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Intermediate node",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Control plane node",
              "isCorrect": true
            }
          ],
          "topic": "Topic 24.4.5",
          "explanation": "The control plane node serves as the central mapping system for the fabric; it maintains the host tracking database (HTDB), which is a central repository that tracks all endpoints and stores their EID-to-RLOC mappings (associating endpoint IDs with their closest fabric node location). It uses LISP map-server functionality to populate this database using registration messages sent by fabric edge nodes when endpoints are onboarded."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "question": "Refer to the exhibit. A network engineer is analyzing traffic patterns on a WAN link. Based on the QoS marking, which traffic class should receive priority treatment during congestion?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "Traffic Analysis:\nFlow 1: DSCP EF (46), 2 Mbps - VoIP\nFlow 2: DSCP AF41 (34), 5 Mbps - Video Conferencing\nFlow 3: DSCP AF21 (18), 10 Mbps - Business Applications\nFlow 4: DSCP CS1 (8), 15 Mbps - Bulk Data\nFlow 5: DSCP 0, 20 Mbps - Best Effort"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Flow 1 because DSCP EF is designated for expedited forwarding",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Flow 2 because video requires more bandwidth than voice",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Flow 4 because CS1 indicates high priority scavenger traffic",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Flow 5 because it has the highest bandwidth consumption",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 9,
          "originalNumber": 9,
          "question": "A network engineer needs to create separate routing tables for different departments while using the same physical infrastructure. Which technology should be implemented?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "VLANs",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "VXLAN",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "VRF (Virtual Routing and Forwarding)",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "GRE tunneling",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 10,
          "originalNumber": 10,
          "question": "Refer to the exhibit. What does this VXLAN packet header indicate about the encapsulated traffic? (Choose four.)",
          "chooseCount": 4,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "Outer Ethernet Header:\n  Dst MAC: 00:50:56:89:12:34\n  Src MAC: 00:50:56:89:56:78\nOuter IP Header:\n  Src IP: 10.1.1.1 (VTEP1)\n  Dst IP: 10.1.1.2 (VTEP2)\nOuter UDP Header:\n  Src Port: 49152\n  Dst Port: 4789\nVXLAN Header:\n  VNI: 10010\nInner Ethernet Frame:\n  Original L2 frame from VM"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The inner frame's original Layer 2 headers are preserved",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The outer source port 49152 indicates encrypted traffic",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The VTEPs are using IP addresses for tunnel endpoints",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "UDP port 4789 is the standard VXLAN destination port",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "The traffic belongs to VXLAN segment 10010",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 11,
          "originalNumber": 11,
          "question": "Which statement correctly describes the relationship between LISP and SD-Access?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "LISP replaces VXLAN as the data plane encapsulation in SD-Access",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "LISP and SD-Access are competing technologies that cannot be used together",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "LISP provides Layer 2 segmentation in the SD-Access fabric",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "LISP provides the control plane for endpoint location tracking in SD-Access",
              "isCorrect": true
            }
          ],
          "topic": "Topic 24.4.6",
          "explanation": "In the Cisco SD-Access architecture, LISP functions as the control plane, responsible for mapping endpoint identifiers (EIDs) to their current routing locators (RLOCs) in a centralized host tracking database,,. This allows the network to decouple a device's identity from its physical location, facilitating host mobility. While LISP handles the mapping and location tracking, VXLAN is used for the data plane because, unlike standard LISP, VXLAN can encapsulate the original Layer 2 Ethernet headers required for fabric operations,."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "question": "An engineer is configuring IPsec tunnel mode between two sites. Which two statements about IPsec tunnel mode are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Tunnel mode is typically used for site-to-site VPN connections",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Tunnel mode requires the endpoints to be the actual traffic sources",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Only the payload is encrypted while the original IP header remains visible",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The original IP header is encrypted and a new IP header is added",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Tunnel mode provides less overhead than transport mode",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.3.1",
          "explanation": "In tunnel mode, the entire original IP packet—including the original header—is encrypted and encapsulated within a completely new IP header. This mode is the standard for site-to-site VPNs because it allows two security gateways (like routers or firewalls) to protect traffic on behalf of other devices, whose original (often private) addresses are hidden inside the encrypted payload. By contrast, transport mode only encrypts the payload and leaves the original IP header visible, which is typically used for direct host-to-host communication."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "question": "Which command would verify that VRF-Lite is properly configured and operational on a Cisco router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show ip vrf interfaces",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show vrf detail",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show ip route",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show ip vrf",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 14,
          "originalNumber": 14,
          "question": "Refer to the exhibit. A network engineer is troubleshooting a trunk link issue. Based on the output, what is causing the problem?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "SW1# show interfaces trunk\nPort        Mode         Encapsulation  Status        Native vlan\nGi0/1       auto         negotiate      not-trunking  1\n\nSW2# show interfaces trunk\nPort        Mode         Encapsulation  Status        Native vlan\nGi0/1       auto         negotiate      not-trunking  1"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Both switches are configured in passive negotiation modes",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The native VLAN mismatch between the switches",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The encapsulation is set to negotiate instead of dot1q",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "DTP mode on SW2 is set to auto, which won't initiate trunk negotiation",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 15,
          "originalNumber": 15,
          "question": "A network engineer needs to configure EtherChannel between two switches. SW1 must actively negotiate the channel while SW2 should only respond to negotiation. Which configuration achieves this using LACP?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SW1: channel-group 1 mode passive; SW2: channel-group 1 mode active",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "SW1: channel-group 1 mode on; SW2: channel-group 1 mode on",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "SW1: channel-group 1 mode desirable; SW2: channel-group 1 mode auto",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SW1: channel-group 1 mode active; SW2: channel-group 1 mode passive",
              "isCorrect": true
            }
          ],
          "topic": "Topic 6.3.1",
          "explanation": "The Link Aggregation Control Protocol (LACP) is an IEEE standard (802.3ad) that uses the negotiation modes active and passive. For an EtherChannel to form, at least one side must be in active mode to initiate the exchange of LACP packets; the passive side will only respond to negotiation requests it receives.\n\nThe other options are incorrect because:\n\n• mode on is used for static EtherChannel, which disables all protocol negotiation (no LACP or PAgP).\n\n• mode desirable and mode auto are the negotiation modes for PAgP (Port Aggregation Protocol), which is a Cisco proprietary protocol and not LACP."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "question": "Refer to the exhibit. A network administrator notices that VLAN 30 traffic is not passing through a trunk link. Based on the output, what is the cause?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "SW1# show interfaces Gi0/1 trunk\nPort        Mode             Encapsulation  Status        Native vlan\nGi0/1       on               802.1q         trunking      1\n\nPort        Vlans allowed on trunk\nGi0/1       1-29,31-4094\n\nPort        Vlans allowed and active in management domain\nGi0/1       1,10,20,31,40\n\nPort        Vlans in spanning tree forwarding state and not pruned\nGi0/1       1,10,20,31,40"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "VLAN 30 is being pruned by VTP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "VLAN 30 is not in the spanning tree forwarding state",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "VLAN 30 has been manually removed from the allowed VLAN list",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "VLAN 30 does not exist in the VLAN database",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 17,
          "originalNumber": 17,
          "question": "Which two statements about RSTP port states are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RSTP has five port states: disabled, blocking, listening, learning, and forwarding",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "An RSTP port in learning state can forward user traffic",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "RSTP backup ports provide an alternate path to the root bridge",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "RSTP combines the STP disabled, blocking, and listening states into a single discarding state",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "RSTP uses proposal/agreement mechanism for rapid convergence on point-to-point links",
              "isCorrect": true
            }
          ],
          "topic": "Topic 4.5.7",
          "explanation": "RSTP uses a proposal/agreement handshake mechanism to transition point-to-point designated ports to a forwarding state almost instantaneously, rather than waiting for traditional timers,.\n\nRSTP simplifies the operation of STP by reducing the number of port states from five down to three: discarding, learning, and forwarding. The discarding state effectively combines the functions of the STP disabled, blocking, and listening states,."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "question": "Refer to the exhibit. An engineer is troubleshooting OSPF neighbor adjacency issues. Based on the output, what is preventing the adjacency from forming?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show ip ospf interface GigabitEthernet0/0\nGigabitEthernet0/0 is up, line protocol is up\n  Internet Address 192.168.1.1/24, Area 0\n  Process ID 1, Router ID 1.1.1.1, Network Type BROADCAST, Cost: 1\n  Transmit Delay is 1 sec, State DR, Priority 1\n  Hello 10, Dead 40, Wait 40, Retransmit 5\n\nR2# show ip ospf interface GigabitEthernet0/0\nGigabitEthernet0/0 is up, line protocol is up\n  Internet Address 192.168.1.2/24, Area 1\n  Process ID 1, Router ID 2.2.2.2, Network Type BROADCAST, Cost: 1\n  Transmit Delay is 1 sec, State DR, Priority 1\n  Hello 10, Dead 40, Wait 40, Retransmit 5"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The hello and dead timer mismatch",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The OSPF process ID mismatch",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The OSPF area mismatch",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Both routers are claiming DR role",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 19,
          "originalNumber": 19,
          "question": "Refer to the exhibit. A network engineer is analyzing BGP path selection. Which path will be selected as the best path to reach 10.0.0.0/8?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show ip bgp 10.0.0.0/8\nBGP routing table entry for 10.0.0.0/8, version 5\nPaths: (3 available, best #?)\n  Path 1: AS_PATH: 65001 65002, NEXT_HOP: 192.168.1.1, MED: 100, LOCAL_PREF: 200\n  Path 2: AS_PATH: 65001, NEXT_HOP: 192.168.2.1, MED: 50, LOCAL_PREF: 150\n  Path 3: AS_PATH: 65001 65003, NEXT_HOP: 192.168.3.1, MED: 75, LOCAL_PREF: 200"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Path 2 - shortest AS_PATH wins",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Path 1 - tie-breaker between Path 1 and Path 3 goes to lower MED",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Path 3 - highest LOCAL_PREF with better MED wins",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Path 1 - highest LOCAL_PREF wins",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 20,
          "originalNumber": 20,
          "question": "Refer to the exhibit. What does this output indicate about the router's NAT configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show ip nat translations\nPro Inside global      Inside local       Outside local      Outside global\nicmp 203.0.113.10:512  192.168.1.10:512   8.8.8.8:512        8.8.8.8:512\nicmp 203.0.113.10:513  192.168.1.11:513   8.8.8.8:513        8.8.8.8:513\nicmp 203.0.113.10:514  192.168.1.12:514   8.8.8.8:514        8.8.8.8:514\ntcp 203.0.113.10:1024  192.168.1.10:1024  93.184.216.34:80   93.184.216.34:80\ntcp 203.0.113.10:1025  192.168.1.11:1025  93.184.216.34:443  93.184.216.34:443"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Dynamic NAT with a pool of addresses is configured",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "NAT is not working because all translations use the same global address",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Static NAT is configured for three internal hosts",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PAT (NAT overload) is being used with a single public IP address",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 21,
          "originalNumber": 21,
          "question": "Which statement correctly describes EIGRP feasible successor?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "A route that always has a higher metric than the successor route",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "A backup route whose reported distance is less than the feasible distance of the successor",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "A route that must go through the DUAL algorithm when the successor fails",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "A route with the lowest metric to the destination",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 22,
          "originalNumber": 22,
          "question": "Which IGMP version introduced support for source-specific multicast (SSM)?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IGMPv2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "IGMPv3",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "IGMPv1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "IGMPv4",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.3.3",
          "explanation": "IGMPv3 introduced support for source filtering, which allows a host to specify to a router the specific multicast group it wants to join and the exact source(s) from which it expects to receive traffic. This source-specific registration is the essential mechanism that enables Source-Specific Multicast (SSM). Previous versions (v1 and v2) only allowed a host to request a group regardless of the source."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "question": "Refer to the exhibit. A network administrator is troubleshooting HSRP. What will happen when R1 recovers from a failure?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show running-config | section standby\ninterface GigabitEthernet0/0\n standby 1 ip 192.168.1.1\n standby 1 priority 110\n standby 1 preempt\n\nR2# show running-config | section standby\ninterface GigabitEthernet0/0\n standby 1 ip 192.168.1.1\n standby 1 priority 100"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "R1 will remain in standby state until R2 fails",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "R2 will remain active because it doesn't have preempt configured",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Both routers will become active causing a split-brain scenario",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "R1 will become the active router",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 24,
          "originalNumber": 24,
          "question": "Which two statements about PIM Sparse Mode (PIM-SM) are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "PIM-SM requires a Rendezvous Point (RP) for initial tree building",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "PIM-SM uses dense mode flooding for the first 3 minutes",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "PIM-SM cannot switch from shared tree to source tree",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PIM-SM floods multicast traffic to all interfaces by default",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "PIM-SM uses a pull model where multicast traffic is only sent where requested",
              "isCorrect": true
            }
          ],
          "topic": "Topic 12.5.2",
          "explanation": "PIM-SM (Sparse Mode) is designed for environments where receivers are scattered across the network. It uses a pull model, meaning traffic is only sent to segments that have explicitly requested it via join messages, rather than flooding the entire network by default. To facilitate this, it requires a Rendezvous Point (RP), which acts as a common meeting place for sources and receivers to build the initial shared distribution tree."
        },
        {
          "id": 25,
          "originalNumber": 25,
          "question": "Which command enables BPDU Guard on a specific interface?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SW1(config-if)# spanning-tree guard bpdu",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "SW1(config-if)# spanning-tree bpduguard enable",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "SW1(config)# spanning-tree bpduguard enable",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SW1(config)# spanning-tree portfast bpduguard",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.8.1",
          "explanation": "To enable BPDU Guard on a specific interface, you must enter interface configuration mode and use the command spanning-tree bpduguard enable,. This feature is designed to protect PortFast-enabled access ports by automatically disabling the port (putting it in an err-disable state) if it receives a BPDU, preventing potential loops caused by unauthorized switches being connected to the network,."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "question": "A network engineer needs to filter OSPF routes being advertised to a neighbor. Which configuration method should be used?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Apply a distribute-list with an ACL to filter specific routes",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "OSPF cannot filter routes; all LSAs must be flooded",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Configure area range with the not-advertise option on an ABR",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Use route-maps to set the metric to infinity",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 27,
          "originalNumber": 27,
          "question": "Refer to the exhibit. Based on the EIGRP topology table output, which route is the feasible successor for network 10.1.1.0/24?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show ip eigrp topology 10.1.1.0/24\nIP-EIGRP topology table for AS(100)/ID(1.1.1.1)\n\nIP-EIGRP topology entry for 10.1.1.0/24\n  State is Passive, Query origin flag is 1, 2 Successor(s), FD is 28160\n  Routing Descriptor Blocks:\n  192.168.1.2 (GigabitEthernet0/0), from 192.168.1.2, Send flag is 0x0\n      Composite metric is (28160/27136), Route is Internal\n      Vector metric:\n        Minimum bandwidth is 1000000 Kbit\n        Total delay is 110 microseconds\n  192.168.2.2 (GigabitEthernet0/1), from 192.168.2.2, Send flag is 0x0\n      Composite metric is (30720/28672), Route is Internal\n  192.168.3.2 (GigabitEthernet0/2), from 192.168.3.2, Send flag is 0x0\n      Composite metric is (33280/25600), Route is Internal"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "192.168.2.2 with reported distance 28672",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "192.168.1.2 with metric 28160",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "192.168.3.2 with reported distance 25600",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "There is no feasible successor; only successors exist",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 28,
          "originalNumber": 28,
          "question": "Which two commands can verify that NAT is working correctly on a Cisco router? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show ip nat translations",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "debug ip nat",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show ip nat statistics",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "show ip route nat",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show running-config | include nat",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.6.1",
          "explanation": "• show ip nat translations displays the active NAT translation table, showing the mapping between inside local, inside global, outside local, and outside global addresses. This confirms that specific traffic flows are currently being translated by the router.\n\n• show ip nat statistics provides a high-level overview of the NAT operation, including the number of active translations, configuration of inside/outside interfaces, hits/misses (indicating successful or failed translations), and details about configured NAT pools."
        },
        {
          "id": 29,
          "originalNumber": 29,
          "question": "Refer to the exhibit. A network engineer is configuring NetFlow to export flow data. What is missing from this configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1(config)# flow record CUSTOM-RECORD\nR1(config-flow-record)# match ipv4 source address\nR1(config-flow-record)# match ipv4 destination address\nR1(config-flow-record)# match transport source-port\nR1(config-flow-record)# match transport destination-port\nR1(config-flow-record)# collect counter bytes\nR1(config-flow-record)# collect counter packets\n!\nR1(config)# flow exporter EXPORTER-1\nR1(config-flow-exporter)# destination 10.1.1.100\nR1(config-flow-exporter)# transport udp 9995\n!\nR1(config)# interface GigabitEthernet0/0\nR1(config-if)# ip flow monitor MONITOR-1 input"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The NetFlow version is not specified in the exporter",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The flow monitor associating the record with the exporter is not configured",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "The source interface for the exporter is not configured",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The interface needs both input and output flow monitoring",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 30,
          "originalNumber": 30,
          "question": "A network engineer wants to capture traffic between two hosts for analysis but the traffic doesn't pass through the engineer's workstation. Which technology should be configured?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RSPAN with a dedicated VLAN for mirrored traffic",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Local SPAN on the switch connecting the hosts",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "ERSPAN encapsulating mirrored traffic in GRE",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "NetFlow export to the engineer's workstation",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.12.0",
          "explanation": "ERSPAN is designed specifically to mirror traffic from one or more \"source\" ports and deliver it to a \"destination\" port on a different switch by encapsulating the traffic in GRE. This makes the mirrored traffic routable across a Layer 3 network, allowing the engineer to receive the packets for analysis even if their workstation is multiple hops away from the source hosts.\n\nIn contrast:\n\n• Local SPAN requires the sniffer and the hosts to be on the same switch.\n\n• RSPAN requires a dedicated VLAN and is limited to a Layer 2 network.\n\n• NetFlow exports traffic statistics and flow data rather than the actual raw packet captures needed for deep analysis."
        },
        {
          "id": 31,
          "originalNumber": 31,
          "question": "Refer to the exhibit. What does this syslog message indicate?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/1, changed state to down"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "A notification-level message about an interface state change",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "A debugging message for troubleshooting purposes",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "An emergency condition requiring immediate action",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "An error condition that needs investigation",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 32,
          "originalNumber": 32,
          "question": "Which SNMP version provides authentication using usernames and passwords along with encryption for data privacy?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SNMPv3 with authNoPriv security level",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "SNMPv1 with community strings",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "SNMPv2c with community strings",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SNMPv3 with authPriv security level",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 33,
          "originalNumber": 33,
          "question": "Which three capabilities does Cisco Catalyst Center Assurance provide? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "End-to-end path trace visualization",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Direct CLI access to all managed devices",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Automated configuration deployment to network devices",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Streaming telemetry for real-time device monitoring",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Software image distribution and upgrade",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "AI/ML-driven insights for proactive issue detection",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 34,
          "originalNumber": 34,
          "question": "Refer to the exhibit. An engineer is troubleshooting SSH access issues. Based on the configuration, what is preventing SSH connections?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1# show running-config | section line vty\nline vty 0 4\n login local\n transport input ssh\n access-class 10 in\n!\nR1# show access-lists 10\nStandard IP access list 10\n    10 permit 192.168.1.0, wildcard bits 0.0.0.255 (15 matches)\n    20 deny any"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Only hosts from 192.168.1.0/24 can establish SSH connections",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The VTY lines are not configured for local authentication",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The explicit deny statement is blocking all traffic",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SSH is not enabled on the router",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 35,
          "originalNumber": 35,
          "question": "Which two statements about AAA authentication are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Local database authentication requires a RADIUS server",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Authentication verifies user identity before granting access",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "AAA authentication must be configured before authorization",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "RADIUS encrypts the entire packet payload between client and server",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "TACACS+ separates authentication, authorization, and accounting functions",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 36,
          "originalNumber": 36,
          "question": "Which command sequence correctly configures a RADIUS server for AAA authentication on a Cisco IOS device?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "R1(config)# radius server RADIUS1\nR1(config-radius-server)# address ipv4 10.1.1.100 auth-port 1812 acct-port 1813\nR1(config-radius-server)# key SecretKey",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "R1(config)# aaa new-model\nR1(config)# radius server 10.1.1.100 key SecretKey",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "R1(config)# authentication radius-server 10.1.1.100 key SecretKey",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "R1(config)# radius-server host 10.1.1.100 key SecretKey",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.8.0",
          "explanation": "Modern Cisco IOS software uses a named RADIUS server object approach for better organization and flexibility.\n\n• The command radius server [name] creates a configuration container for a specific server and enters subconfiguration mode.\n\n• Inside this mode, you use the address command to specify the IP and the standard UDP ports (1812 for authentication and 1813 for accounting).\n\n• The key command is then used to set the shared secret that must match the value configured on the RADIUS server to encrypt communication.\n\nThe other options either use legacy syntax (radius-server host) or invalid command strings that do not follow the structured object-based configuration described in the sources."
        },
        {
          "id": 37,
          "originalNumber": 37,
          "question": "Which Control Plane Policing (CoPP) action should be applied to protect against SSH brute-force attacks while still allowing legitimate SSH access?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Permit SSH traffic without any restrictions",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Police SSH traffic to a reasonable rate limit",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Drop all SSH traffic to the control plane",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Mark SSH traffic with a higher DSCP value",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.9.1",
          "explanation": "Control Plane Policing (CoPP) is designed to prevent the CPU from being overwhelmed by low-priority or malicious traffic. By using a police statement within a policy map, you can specify a maximum traffic rate for SSH (TCP port 22). This allows legitimate management sessions to conform and be transmitted, while excessive traffic—such as the high-volume packet floods generated during a brute-force or DoS attack—will exceed the limit and be dropped."
        },
        {
          "id": 38,
          "originalNumber": 38,
          "question": "Which two security features protect the network infrastructure from unauthorized devices connecting to switch ports? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Port security with MAC address limiting",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Storm control",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "BPDU Guard",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "DHCP snooping",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "802.1X port-based authentication",
              "isCorrect": true
            }
          ],
          "topic": "Topic 15.16.0, 15.7.0 and 15.17.2\n\n802.1",
          "explanation": "X port-based authentication is the foundation for network access control; it requires a device to provide valid credentials to an authentication server (like Cisco ISE) before the switch port is transitioned to an authorized state.\n\nPort security is a Layer 2 feature that protects the infrastructure by limiting the number of MAC addresses allowed on a single port or by binding a port to a specific, authorized MAC address. If an unauthorized device (with an unknown or excessive MAC) is detected, the switch can automatically disable the port to prevent access."
        },
        {
          "id": 39,
          "originalNumber": 40,
          "question": "Which AAA accounting record type captures information about commands executed by administrators?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Command accounting",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "EXEC accounting",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Connection accounting",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Network accounting",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.10.0",
          "explanation": "Command accounting (triggered by the commands keyword) specifically records information about any command running at a specific privilege level, along with the identity of the user who issued it. This allows for a detailed audit trail of administrative actions taken on a device.\n\nIn contrast:\n\n• EXEC accounting captures information about the EXEC session itself, such as the user's address, login time, and session duration.\n\n• System accounting records major system-wide events like reloads."
        },
        {
          "id": 40,
          "originalNumber": 41,
          "question": "Refer to the exhibit. A security engineer is reviewing the AAA configuration. What method will be used if the RADIUS server is unreachable? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "aaa new-model\naaa authentication login default group radius local\naaa authentication login CONSOLE local\n!\nradius server RADIUS1\n address ipv4 10.1.1.100 auth-port 1812\n key Cisco123\n!\nline console 0\n login authentication CONSOLE\nline vty 0 4\n login authentication default"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "VTY access will fall back to local database authentication",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Console access will use the local database",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Console access will use RADIUS for authentication",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "VTY access will be denied if RADIUS is unreachable",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The 'none' keyword allows access without authentication if all methods fail",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 41,
          "originalNumber": 42,
          "question": "Which security technology would best protect against a man-in-the-middle attack on the local network segment?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Dynamic ARP Inspection (DAI)",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Private VLANs",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Port security with sticky MAC addresses",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "ACLs filtering unauthorized IP addresses",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.2.1",
          "explanation": "Man-in-the-middle (MitM) attacks are complex threats where an attacker imposes themselves into the communication path between two systems to view or modify traffic. These attacks typically require the exploitation of local network protocols such as ARP, DNS, or DHCP to successfully misdirect traffic. Dynamic ARP Inspection (DAI) is the specific security technology designed to protect against these attacks on the local network segment by validating ARP packets, thereby preventing \"ARP poisoning\" or spoofing, which is the primary method used to achieve a MitM position at the data link layer."
        },
        {
          "id": 42,
          "originalNumber": 43,
          "question": "Which two components are part of Cisco's Zero Trust security architecture? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Trust all internal network traffic by default",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Network segmentation based on user identity and device posture",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Single perimeter-based firewall for all security",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Implicit trust for users once they pass initial authentication",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Continuous verification of user and device identity",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 43,
          "originalNumber": 44,
          "question": "Refer to the exhibit. What will be the output of this Python script?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "python",
              "title": "Script Python — Exhibit",
              "content": "devices = ['router1', 'switch1', 'firewall1']\nfor index, device in enumerate(devices):\n    if 'switch' in device:\n        print(f'Device {index}: {device.upper()}')\n    else:\n        print(f'Device {index}: {device}')"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Device 1: router1\nDevice 2: SWITCH1\nDevice 3: firewall1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Device 0: router1\nDevice 1: SWITCH1\nDevice 2: firewall1",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Device 0: ROUTER1\nDevice 1: SWITCH1\nDevice 2: FIREWALL1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Error: enumerate() does not work with lists",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 44,
          "originalNumber": 45,
          "question": "Which NETCONF operation retrieves only the configuration data from a device?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "<edit-config>",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "<get>",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "<copy-config>",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "<get-config>",
              "isCorrect": true
            }
          ],
          "topic": "Topic 22.11.4\n\nN",
          "explanation": "ETCONF distinguishes between two classes of data: configuration data (writable data required to reach a desired system state) and state data (read-only information such as statistics and status).\n\n• is used to retrieve only configuration data from a specific datastore.\n\n• is used to retrieve both configuration and state data simultaneously."
        },
        {
          "id": 45,
          "originalNumber": 46,
          "question": "Refer to the exhibit. What is the purpose of this EEM applet?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "event manager applet INTERFACE-DOWN\n event syslog pattern \"LINEPROTO-5-UPDOWN.*GigabitEthernet0/1.*down\"\n action 1.0 cli command \"enable\"\n action 2.0 cli command \"configure terminal\"\n action 3.0 cli command \"interface GigabitEthernet0/2\"\n action 4.0 cli command \"shutdown\"\n action 5.0 cli command \"no shutdown\"\n action 6.0 syslog msg \"Bounced Gi0/2 due to Gi0/1 down event\""
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "To monitor interface Gi0/1 and log when it goes down",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "To prevent Gi0/1 from going down by bouncing Gi0/2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "To automatically bounce Gi0/2 when Gi0/1 goes down",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "To synchronize the state of Gi0/1 and Gi0/2",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 46,
          "originalNumber": 47,
          "question": "Which HTTP method is used by RESTCONF to create a new resource that does not already exist?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "GET",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "PUT",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "POST",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "PATCH",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 47,
          "originalNumber": 48,
          "question": "Refer to the exhibit. What does this JSON response from a REST API indicate?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "json",
              "title": "Réponse JSON REST API — Exhibit",
              "content": "{\n  \"response\": {\n    \"id\": \"a1b2c3d4-e5f6-7890-abcd-ef1234567890\",\n    \"taskId\": \"task123\",\n    \"url\": \"/api/v1/task/task123\"\n  },\n  \"version\": \"1.0\"\n}"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The API request was accepted and a task was created to process it",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The API returned configuration data from the device",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The API request failed with an error",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The API is returning a list of available endpoints",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 48,
          "originalNumber": 49,
          "question": "Which two tools are considered agentless for configuration management? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Puppet",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Chef",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Salt (with SSH)",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "CFEngine",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Ansible",
              "isCorrect": true
            }
          ],
          "topic": "Topic 22.2.3\n\nAn",
          "explanation": "sible: This tool is natively agentless, meaning it does not require software to be installed on the managed devices. It uses protocols such as SSH, NETCONF, or REST APIs to communicate and push configurations.\n\nSalt (with SSH): While SaltStack typically relies on \"minions\" (agents), the Salt-SSH implementation provides an agentless alternative for managing systems over SSH.\n\nContrast with others: Puppet and Chef are explicitly defined as agent-based solutions, requiring a software agent to be installed on every server or network device being managed."
        },
        {
          "id": 49,
          "originalNumber": 50,
          "question": "Which two statements correctly describe the Cisco Catalyst Center Platform APIs? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Integration APIs enable third-party applications to receive network events",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Intent APIs allow network administrators to express business intent",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "All API operations are synchronous and return results immediately",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "APIs use SOAP for all communication",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "APIs require SNMP credentials for device access",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 50,
          "originalNumber": 51,
          "question": "What is missing or incorrect in the GRE tunnel configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The tunnel destination on R2 should be 203.0.113.2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The tunnel mode GRE IP command is missing on both routers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The tunnel interface IP addresses must be on the same subnet as the physical interfaces",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The tunnel destination configured on R1 does not match the tunnel source IP address of R2",
              "isCorrect": true
            }
          ],
          "topic": "Topic 17.8.2",
          "explanation": "For a GRE tunnel to establish a successful line protocol state (\"up\"), the configuration must be symmetrical: the tunnel destination address on one router must match the reachable IP address used as the tunnel source on the remote peer.\n\nThe other options are incorrect based on the sources because:\n\n• The tunnel mode gre ip command is the default mode and is not necessary to configure.\n\n• Tunnel interface IP addresses are typically assigned from a different subnet than the physical interfaces to avoid routing conflicts."
        },
        {
          "id": 51,
          "originalNumber": 52,
          "question": "Which two statements correctly describe Type 1 and Type 2 hypervisors? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Type 1 hypervisors run directly on hardware without a host operating system",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Type 1 hypervisors are also known as hosted hypervisors",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "VMware ESXi is an example of a Type 2 hypervisor",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Type 2 hypervisors provide better performance than Type 1 for enterprise workloads",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Type 2 hypervisors run as applications on top of a host operating system",
              "isCorrect": true
            }
          ],
          "topic": "Topic 17.2.2\n\nA",
          "explanation": "Type 1 hypervisor (also called bare-metal) is installed directly on the physical server hardware instead of a host operating system, acting as a lightweight OS to manage virtual machines and allocate physical resources. VMware ESXi is a prominent example of a Type 1 hypervisor. Type 2 hypervisors (hosted) differ because they run as software applications on top of a conventional host operating system. Because Type 1 hypervisors have direct access to hardware without the overhead of a host OS, they provide significantly better performance and efficiency for enterprise workloads."
        },
        {
          "id": 52,
          "originalNumber": 53,
          "question": "Refer to the exhibit. A network engineer is implementing MST (Multiple Spanning Tree). What is the result of this configuration? (Choose four.)",
          "chooseCount": 4,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "SW1(config)# spanning-tree mode mst\nSW1(config)# spanning-tree mst configuration\nSW1(config-mst)# name ENTERPRISE\nSW1(config-mst)# revision 1\nSW1(config-mst)# instance 1 vlan 10,20,30\nSW1(config-mst)# instance 2 vlan 40,50,60"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The configuration requires matching name and revision on all MST switches",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Each VLAN will have its own independent spanning tree calculation",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "VLANs 10, 20, and 30 will share a single spanning tree instance",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "MST reduces CPU and memory usage compared to PVST+",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "VLANs not explicitly mapped will be assigned to instance 0 (IST)",
              "isCorrect": true
            }
          ],
          "topic": "Topic 4.6.0",
          "explanation": "MST was developed to address the scalability issues of PVST+. While PVST+ creates a separate spanning tree instance for every single VLAN (which is CPU and memory intensive), MST groups multiple VLANs into a small number of instances. For these instances to work across multiple switches, the switches must belong to the same MST Region, which requires an identical Name, Revision number, and VLAN-to-instance mapping. Any VLAN not specifically mapped to a custom instance defaults to Instance 0 (the IST), which remains active on all ports."
        },
        {
          "id": 53,
          "originalNumber": 54,
          "question": "A network engineer is configuring eBGP between a company's edge router (AS 65001) and an ISP router (AS 65002). Which three configuration elements should the engineer verify? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The BGP router ID is configured to match the ISP router's BGP router ID",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The update-source command matches the interface used to reach the ISP peer",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The BGP timers are synchronized with the IGP protocol timers",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "An ACL or firewall is not blocking TCP port 179 between the peers",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "The eBGP multihop setting is configured if the peers are not directly connected",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "The neighbor remote-as command specifies AS 65002 for the ISP peer",
              "isCorrect": true
            }
          ],
          "topic": "Topic 11.2.1, 11.4.1 and 11.7.1",
          "explanation": "For an eBGP session to establish successfully, the routers must first be able to complete a TCP three-way handshake using port 179; any security device or ACL blocking this port will prevent the session from starting. The engineer must also explicitly define the neighbor using the neighbor remote-as command, ensuring the AS number matches the peer's actual AS (65002), or the session will be terminated. Finally, by default, eBGP neighbors must be directly connected; if they are peering via non-directly connected interfaces (like loopbacks), the eBGP multihop setting must be enabled to allow the TTL check to pass."
        },
        {
          "id": 54,
          "originalNumber": 55,
          "question": "Which three options are valid components of a Cisco IP SLA operation? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "OSPF operation to measure SPF calculation time",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "BGP operation to measure route convergence",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "UDP Jitter operation to measure one-way delay and jitter",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "ICMP Echo operation to measure round-trip time",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "HTTP operation to measure web server response time",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "SNMP operation to measure MIB response time",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.8.1",
          "explanation": "Cisco IP SLAs use active traffic monitoring to measure network performance by generating specific protocol operations.\n\n• ICMP Echo is used to determine host reachability and measure round-trip time (RTT).\n\n• UDP Jitter is designed for real-time traffic analysis, measuring interpacket delay variance (jitter), one-way latency, and packet loss.\n\n• HTTP allows the measurement of web server response times."
        },
        {
          "id": 55,
          "originalNumber": 56,
          "question": "A network engineer needs to create an automated response when an interface goes down. Which Cisco IOS feature should be used?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Syslog server with alerting",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Embedded Event Manager (EEM)",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "SNMP trap configuration",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "IP SLA with tracking",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.10.1",
          "explanation": "Cisco IOS EEM is a powerful subsystem designed specifically to automate tasks and customize device behavior by responding to real-time events. It uses event detectors (such as a syslog pattern matching an interface state change) to trigger an action list, which can include executing CLI commands (like no shutdown), sending emails, or generating SNMP traps locally on the device. While features like Syslog and SNMP traps provide notifications to external servers, EEM is the primary tool for taking local automated action based on those events."
        },
        {
          "id": 56,
          "originalNumber": 57,
          "question": "Refer to the exhibit. What is the effect of this ACL when applied outbound on interface GigabitEthernet0/1? (Choose four.)",
          "chooseCount": 4,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "ip access-list extended SECURITY-ACL\n 10 permit tcp 192.168.10.0 0.0.0.255 any eq 443\n 20 permit tcp 192.168.10.0 0.0.0.255 any eq 80\n 30 permit icmp 192.168.10.0 0.0.0.255 any echo-reply\n 40 deny ip any any log"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Return traffic for HTTP sessions will be permitted",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Hosts on 192.168.10.0/24 can respond to ping requests",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "All denied traffic will be logged",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Hosts on 192.168.10.0/24 can access HTTPS websites",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Hosts on 192.168.10.0/24 can initiate ping requests",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.7.1",
          "explanation": null
        },
        {
          "id": 57,
          "originalNumber": 58,
          "question": "A network administrator needs to ensure that only encrypted management protocols are used to access network devices. Which two protocols should be permitted? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "HTTPS on port 443",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "TFTP on port 69",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Telnet on port 23",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "HTTP on port 80",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "SSH on port 22",
              "isCorrect": true
            }
          ],
          "topic": "Topic 16.2.0",
          "explanation": "SSH (Secure Shell): This is the industry standard for CLI access because it protects authentication credentials and data using encryption. In contrast, Telnet (port 23) sends all data and credentials in cleartext, which can be easily captured by attackers.\n\nHTTPS (Hypertext Transfer Protocol Secure): This is preferred for GUI access because it uses SSL/TLS to encrypt all data passing over the network and allows the client to verify the device's identity. Standard HTTP (port 80) is insecure as it does not provide these protections.\n\nTFTP (Trivial File Transfer Protocol): While used for management tasks like file transfers, it is an unencrypted, cleartext protocol."
        },
        {
          "id": 58,
          "originalNumber": 59,
          "question": "Which statement correctly describes MACsec (Media Access Control Security)?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "MACsec provides Layer 2 hop-by-hop encryption on LAN links",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "MACsec is an authentication protocol that replaces 802.1X",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "MACsec provides Layer 3 encryption between sites over the WAN",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "MACsec encrypts traffic between endpoints regardless of network hops",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.14.0",
          "explanation": "MACsec (IEEE 802.1AE) is a standards-based security technology that provides data confidentiality and integrity by performing Layer 2 hop-by-hop encryption on wired LAN links. This means it encrypts the entire Ethernet frame between two directly connected devices. It is implemented using the 802.1X Extensible Authentication Protocol (EAP) framework to manage session keys through the MACsec Key Agreement (MKA) protocol, rather than replacing it.\n\nUnlike Layer 3 solutions like IPsec, which encrypt the packet payload for transport across multiple network hops, MACsec is specifically designed for point-to-point protection at the data link layer."
        },
        {
          "id": 59,
          "originalNumber": 60,
          "question": "Which two statements about YANG data models are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "YANG defines the structure of configuration and operational data",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "YANG uses a hierarchical tree structure to organize data",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "YANG is a protocol for transporting configuration data",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "YANG models are specific to Cisco devices only",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "YANG directly executes configuration changes on devices",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.8.5",
          "explanation": "YANG (Yet Another Next Generation) is a data modeling language, not a transport protocol. Its primary purpose is to provide a highly structured way to describe what can be configured on a network device and what operational state data can be monitored.\n\nKey concepts include:\n\n• Hierarchical Organization: YANG data modeling is tree-structured, using definition hierarchies known as schema trees to organize nodes.\n\n• Protocol Independence: While initially designed for NETCONF, YANG is independent of the transport protocol; it defines the data structure, while protocols like NETCONF or RESTCONF handle the actual transmission of that data.\n\n• Vendor Neutrality: YANG is an open standard (RFC 7950) used for both vendor-specific models (like Cisco native models) and vendor-neutral models created by groups like the IETF and OpenConfig."
        },
        {
          "id": 60,
          "originalNumber": 61,
          "question": "Which REST API response code indicates that the request was successful and a new resource was created?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "201 Created",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "202 Accepted",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "200 OK",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "204 No Content",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.3.1",
          "explanation": "REST APIs use standard HTTP status codes to communicate the outcome of a request. Successful requests are indicated by codes in the 2xx range.\n\n• 201 Created: This specific code indicates that the request was successful and resulted in the creation of a new resource on the server.\n\n• 200 OK: This code indicates a general success where the action was completed, but it does not necessarily signify the creation of a new object (it is commonly used for GET or PUT requests).\n\n• 202 Accepted: This indicates the request was accepted but the final processing has not yet been completed, often used for asynchronous tasks where a taskId is returned.\n\n• 204 No Content: This indicates the request was successful, but there is no data to return in the response body."
        },
        {
          "id": 61,
          "originalNumber": 62,
          "question": "Refer to the exhibit. A network engineer is reviewing the enterprise campus design. Which three statements accurately describe this topology? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "diagram",
              "title": "Schéma de Topologie — Exhibit",
              "content": "                    [Core Layer]\n                    /          \\\n        [Distribution]        [Distribution]\n              /    \\               /    \\\n        [Access]  [Access]   [Access]  [Access]\n           |         |          |         |\n         [PCs]     [VoIP]     [APs]    [Servers]"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The core layer should provide the highest switching speeds",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "This represents a collapsed core design",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "This represents a 3-tier hierarchical design model",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "The distribution layer provides routing and policy enforcement",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "End-user devices should connect directly to the distribution layer",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 62,
          "originalNumber": 63,
          "question": "Which two OSPF network types require manual neighbor configuration? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Point-to-point",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Point-to-multipoint",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Non-broadcast",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Point-to-multipoint non-broadcast",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Broadcast",
              "isCorrect": false
            }
          ],
          "topic": null,
          "explanation": null
        },
        {
          "id": 63,
          "originalNumber": 63,
          "question": "Refer to the exhibit. A network engineer is configuring a GRE tunnel between two sites. Based on the configuration, what is missing or incorrect?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco IOS CLI — Exhibit",
              "content": "R1(config)# interface Tunnel0\nR1(config-if)# ip address 172.16.1.1 255.255.255.252\nR1(config-if)# tunnel source GigabitEthernet0/0\nR1(config-if)# tunnel destination 203.0.113.2\n\nR2(config)# interface Tunnel0\nR2(config-if)# ip address 172.16.1.2 255.255.255.252\nR2(config-if)# tunnel source 198.51.100.1\nR2(config-if)# tunnel destination 203.0.113.1"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The tunnel mode GRE IP command is missing on both routers",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The tunnel interface IP addresses must be on the same subnet as the physical interfaces",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The tunnel destination on R2 should be 203.0.113.2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The tunnel destination configured on R1 does not match the tunnel source IP address of R2",
              "isCorrect": true
            }
          ],
          "topic": null,
          "explanation": null
        }
      ]
    },
    "ccnp-encor-v9-routing": {
      "id": "ccnp-encor-v9-routing",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 8 – 13",
      "title": "Checkpoint Exam : Network Routing (Modules 8 – 13)",
      "description": "Examen Checkpoint officiel sur le routage réseau (EIGRP, OSPF, BGP, Multicast, NAT/PAT) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-8-13-checkpoint-exam-network-routing-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 45,
      "passingScorePercent": 70,
      "totalQuestions": 45,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "When should you enable the EIGRP load and/or reliability metrics?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "If needed for troubleshooting",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "To identity better paths when load or reliability change",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Only on core routers",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Under recommendation by Cisco",
              "isCorrect": true
            }
          ],
          "topic": "Topic 8.5.1",
          "explanation": "EIGRP uses a composite metric based on five vector attributes: bandwidth (K1), load (K2), delay (K3), reliability (K4), and MTU (K5). By default, Cisco sets these coefficients so that only bandwidth and delay (K1 and K3) are used to calculate the path metric, while load and reliability (K2 and K4) are set to zero and ignored.\n\nThe sources explicitly state that Cisco does not recommend using load and reliability for metric computation. Furthermore, because EIGRP metric K-values are exchanged in hello packets, they must be consistently configured across the entire network; a mismatch will cause neighbor relationships to reset. Therefore, these values should only be changed under the recommendation of Cisco. Changing them without expert guidance can lead to inconsistent routing behavior and connectivity issues."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "What is the scope and address range for multicast addresses that are reserved for use inside private domains?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "administratively scoped: 239.0.0.0-239.255.255.255",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "global scope: 224.0.1.0-238.255.255.255",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "local scope: 239.0.0.0-239.255.255.255",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "local scope: 224.0.0.0-224.0.0.255",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.2.5",
          "explanation": "The multicast IP address space (Class D) is categorized into three primary functional groups based on their scope of use:\n\n• Administratively scoped addresses: These range from 239.0.0.0 through 239.255.255.255 and are specifically reserved for use inside private domains.\n\n• Local-scope addresses: These range from 224.0.0.0 through 224.0.0.255 and are reserved by IANA for network protocol use; they are never forwarded off the local network regardless of their Time to Live (TTL) value.\n\n• Global-scope addresses: These range from 224.0.1.0 through 238.255.255.255 and are allocated dynamically across the internet.\n\nThe administratively scoped range acts similarly to RFC 1918 private unicast addresses, allowing organizations to use multicast internally without conflicting with addresses used on the public internet."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Which two statements describe what a next hop of 0.0.0.0 indicates in this show ip bgp command output? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "Router# show ip bgp  \n For address family: IPv4 Unicast   ***** \n BGP table version is 27, local router ID is 1.1.1.1 \n Status codes: s suppressed, d damped, h history, * valid, > best, i - internal, \n               r RIB-failure \n Origin codes: i - IGP, e - EGP, ? - incomplete \n\n     Network            Next Hop            Metric    LocPrf Weight Path \n *> 10.1.1.0/24        0.0.0.0                  0         32768 ? \n *> 10.13.13.0/24    0.0.0.0                  0         32768 ? \n *> 10.15.15.0/24    0.0.0.0                  0         32768 ?"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The next hop is not reachable.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The network is not valid.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The network is locally originated via the network command in BGP.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "The router does not know the next hop.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The network was redistributed into BGP from an IGP.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 11.7.2",
          "explanation": "The provided show ip bgp output contains several key indicators regarding the origin and status of the listed networks:\n\n• Next Hop of 0.0.0.0: In BGP terminology, a next hop of 0.0.0.0 indicates that the network is locally originated by the router performing the command.\n\n• Weight of 32768: This is the default Weight attribute assigned to paths that the local router originates. Other paths learned from neighbors have a default weight of 0.\n\n• Origin Code \"?\": The \"Origin\" attribute (at the far right of the output) indicates how the route was introduced into BGP. An \"i\" indicates the network command, while a \"?\" (incomplete) indicates the network was redistributed into BGP from an IGP or static route.\n\nIn your specific output, the networks have a next hop of 0.0.0.0 and a weight of 32768, confirming they are locally originated. Furthermore, the \"?\" origin code explicitly indicates they were introduced via redistribution. (Note: While one option mentions the \"network command,\" standard BGP interpretation uses 0.0.0.0 to identify local origination generally, and the ? code identifies redistribution as the specific method for these entries)."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "Which IGMP version allows a host to indicate that they only want to receive traffic from a specific source within a multicast group?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IGMPv2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "IGMPv3",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "IGMPv1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "IGMPv4",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.3.3",
          "explanation": "IGMP Version 3 added support for \"source filtering,\" a feature that enables a multicast receiver host to signal to a router which multicast groups it wants to join and the specific sources from which it expects to receive that traffic. This is also known as source-specific multicast (SSM) capability. By using this membership information, Cisco IOS Software can forward traffic only from the sources explicitly requested by the receivers.\n\nIn contrast, earlier versions do not have this capability:\n\n• IGMPv1 uses a basic query-response model for reporting group membership.\n\n• IGMPv2 improves on version 1 by adding group-specific queries and a leave-group message to reduce latency, but it still lacks source-specific filtering."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which option enables one public address to be used for multiple internal private hosts?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "PAT",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "DHCP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "static NAT",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "dynamic NAT",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.4.3",
          "explanation": "Port Address Translation (PAT), also referred to as NAT overloading, is the specific implementation of NAT that allows multiple internal private hosts to share a single public (inside global) IPv4 address for external communication. This is a many-to-one mapping process where the router uses unique TCP or UDP port numbers to differentiate between the various internal client sessions.\n\nWhen a response returns from the internet, the router uses the destination port number to determine which specific internal host should receive the packet, a mechanism known as connection tracking. Because port numbers are 16-bit values, a single public IP address can theoretically support as many as 65,536 internal translations.\n\nIn contrast, other NAT types do not support this specific \"many-to-one\" sharing:\n\n• Static NAT maps a single private address to a single public address (one-to-one).\n\n• Dynamic NAT maps private addresses to a pool of available public addresses rather than a single one.\n\n• DHCP is used for address allocation, not translation."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "Based on the output given, which statement correctly describes whether or not the BGP session is established between the peers?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1# show ip bgp summary \nBGP router identifier 10.1.1.1, local AS number 64 \nBGP table version is 1, main routing table version 1\n\nNeighbor  V      AS MsgRcvd MsgSent     TblVer      InQ OutQ   Up/Down  State/PfxRcd \n10.1.5.70        4      64       0            0        0         0     0       never    Active"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Yes, it is in the established state.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "No, it is in the active state trying to establish a BGP session.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Yes, it is in active state.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "No, it is in the never state.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 11.7.2",
          "explanation": "In the output of the show ip bgp summary command, the State/PfxRcd column indicates the current status of the BGP peering relationship. When a BGP session is successfully established, this column does not show a state name; instead, it displays a numeric value representing the number of prefixes received from that neighbor.\n\nIf a text string like Active is displayed in this column, it signifies that the BGP session is not yet established. Specifically, the Active state indicates that the router is actively attempting to initiate a TCP connection with the peer to establish the session. Furthermore, the never entry in the Up/Down column confirms that a successful BGP adjacency has never been formed with this neighbor."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which two statements about single-area and multiarea OSPF are true? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Multiarea OSPF can be used to limit the propagation and processing of LSAs.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "In single-area OSPF, all routers inject routing information into the backbone router, and in turn the backbone router sends that information to other routers.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Multiarea OSPF is more scalable than single-area OSPF and is easier to implement.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "In multiarea OSPF, Area 1 must be physically connected to the backbone, and all other areas must be connected to Area 1.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Single-area OSPF has one advantage over multiarea OSPF: smaller routing tables.",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "When a multiarea design is used, one of the areas should be Area 0.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 9.7.0",
          "explanation": "OSPF uses a two-layer hierarchical design to enhance scalability and efficiency. The two true statements are supported as follows:\n\n• LSA Limitation: One of the primary advantages of multiarea OSPF is that it segments the network to limit the propagation of LSAs inside a specific area. This ensures that any topology change in one area causes LSA flooding and SPF recalculations only within that specific area, rather than across the entire OSPF domain.\n\n• Requirement for Area 0: The sources explicitly state that when multiple areas are involved, OSPF has special restrictions requiring that one of the areas must be Area 0, also known as the backbone. All other non-backbone areas must connect directly to this backbone area to facilitate the distribution of routing information between them."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "matching",
          "question": "Match the packet type with the proper function and description.",
          "chooseCount": 5,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Contains a list of LSAs that need to be updated",
              "answer": "LSU"
            },
            {
              "id": "p2",
              "prompt": "Discovers and maintains neighbors",
              "answer": "Hello"
            },
            {
              "id": "p3",
              "prompt": "Ensures a reliable transmission of LSAs",
              "answer": "LSAck"
            },
            {
              "id": "p4",
              "prompt": "Generated when the router does not have the current information in its database",
              "answer": "LSR"
            },
            {
              "id": "p5",
              "prompt": "Contains the LSA headers that help routers build the link-state database",
              "answer": "DBD"
            }
          ],
          "options": [],
          "topic": "Topic 9.5.0",
          "explanation": null
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "choice",
          "question": "Which two of the following commands should you use to determine whether the EIGRP router ID has been configured in the EIGRP process? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show ip protocols",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "show ip eigrp interface",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show ip eigrp traffic",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show ip eigrp neighbor",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show ip eigrp topology",
              "isCorrect": true
            }
          ],
          "topic": "Topic 8.10.2",
          "explanation": "To determine the Router ID (RID) assigned to an EIGRP process, the following commands are the most effective:\n\n• show ip protocols: The sources explicitly state that while the EIGRP router ID has less significance than in OSPF, you should use show ip protocols (referred to in the text as show ip protocol) to view it. This command provides a comprehensive overview of the routing protocol parameters, including the AS number, K-values, and the current Router ID.\n\n• show ip eigrp topology: This command is used to display the EIGRP topology table. In the header of the output for this command, the router typically displays the local autonomous system number and the local Router ID associated with that database.\n\nIn contrast, other commands like show ip eigrp interface focus on interface-specific settings like Hello intervals, and show ip eigrp neighbor focuses on identifying discovered adjacent routers rather than local process identifiers."
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which character in the BGP table of routes indicates the best path to a given route?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "b",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "*",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "#",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": ">",
              "isCorrect": true
            }
          ],
          "topic": "Topic 11.7.2",
          "explanation": "In the output of the show ip bgp command, the BGP table (or forwarding database) lists all the routes the router has learned from its neighbors. When the BGP table contains more than one path to reach the same destination network, the protocol runs a specific selection process to identify the single optimal route.\n\nThis best path is explicitly designated by the \">\" character located in the left-most column of the table. Other status codes are often seen in conjunction with this:\n\n• The \"*\" character indicates that the route is valid.\n\n• The \">\" character indicates it is the best path.\n\nIf only one path to a network exists, it is marked as both valid and best (*>) by default. Only the route marked with the \">\" symbol is offered to the router's IP routing table for traffic forwarding."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "Which two options are classified as link-state routing protocols? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "BGP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "RIPv2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "EIGRP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "OSPF",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "IS-IS",
              "isCorrect": true
            }
          ],
          "topic": "Topic 9.2.0",
          "explanation": "Open Shortest Path First (OSPF) and Intermediate System-to-Intermediate System (IS-IS) are both classified as link-state routing protocols. OSPF functions by having routers generate Link State Advertisements (LSAs), which describe the state of their interfaces and relationships with neighbors. These LSAs are flooded throughout an area so that every router can piece together an identical link-state database (LSDB) representing the complete network topology.\n\nThe other protocols listed are categorized differently:\n\n• RIPv2 is a traditional distance vector routing protocol.\n\n• EIGRP is described as an advancement on distance vector protocols that combines advantages of both link-state and distance vector mechanisms, but it is primarily based on distance vector principles where information is learned from directly connected neighbors.\n\n• BGP is defined as a path vector protocol that uses path attributes to exchange reachability information between different autonomous systems."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "In the following output, the AS number 65200 is for which router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1(config-router)# neighbor 10.108.200.1 remote-as 65200"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "the neighbor router with the IP address 10.108.200.1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "both routers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "neither router; 65200 is a process ID",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "the local router R1",
              "isCorrect": false
            }
          ],
          "topic": "Topic 11.7.1",
          "explanation": "In Border Gateway Protocol (BGP) configuration, the neighbor [ip-address] remote-as [as-number] command is used to explicitly define a peering relationship with another BGP speaker. The remote-as keyword specifically identifies the Autonomous System number of the neighbor router being configured.\n\nThe local router's own AS number is established when the BGP process is first enabled using the router bgp [as-number] command. In your specific example, the command tells the local router (R1) that the peer at IP address 10.108.200.1 belongs to AS 65200. If the AS number in the remote-as command is the same as the local router's AS, it is an Internal BGP (IBGP) session; if it is different, it is an External BGP (EBGP) session."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which statement correctly describes OSPF summarization?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "With route summarization, only the summarized routes are propagated into the stub areas.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "With route summarization, only the default route is propagated into the backbone (Area 0).",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "With route summarization, all subnet routes are propagated into the backbone (Area 0).",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "With route summarization, only the summarized routes are propagated into the backbone (Area 0).",
              "isCorrect": true
            }
          ],
          "topic": "Topic 10.4.1",
          "explanation": "OSPF route summarization is an optimization technique where an Area Border Router (ABR) or Autonomous System Boundary Router (ASBR) consolidates multiple specific network prefixes into a single summary advertisement.\n\nAccording to the sources, without route summarization, every individual specific-link LSA is propagated into the OSPF backbone and throughout the entire domain, which increases network traffic and router overhead. When summarization is enabled, only the summarized routes are propagated into the backbone (Area 0). This provides several critical benefits:\n\n• Reduced LSA Flooding: It prevents topology changes (like a link failure) in one area from being propagated into the backbone and other areas.\n\n• Smaller Routing Tables: It minimizes the number of routing table entries that routers in other areas must maintain.\n\n• Improved Efficiency: Because individual changes are hidden, routers in the backbone and other areas do not have to rerun the SPF algorithm for every change in a remote area, which saves CPU and memory resources.\n\nWhile ABRs specifically inject these as Type-3 summary LSAs into the backbone, ASBRs summarize Type-5 external LSAs."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "Which protocol does a receiver use to register their interest in multicast traffic at the first-hop router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IGMP",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Anycast-RP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "PIM-SM",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PIM-DM",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.3.0",
          "explanation": "The Internet Group Management Protocol (IGMP) is the specific protocol used by IP hosts (receivers) to report their multicast group membership to their first-hop multicast routers. Its primary purpose is to allow these hosts to communicate their desire to receive specific multicast traffic to the local router, which then begins forwarding that traffic onto the network segment.\n\nIn contrast, other protocols mentioned serve different functions:\n\n• PIM-SM (Sparse Mode) and PIM-DM (Dense Mode) are multicast routing protocols used between routers to build distribution trees and forward traffic across the network.\n\n• Anycast-RP is a technique used to provide redundancy and load sharing for Rendezvous Points within a PIM-SM environment, rather than for host-to-router registration.\n\nWhile receivers use IGMP to register with their local (first-hop) router, that router then uses protocols like PIM to communicate that membership information to the rest of the network."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "choice",
          "question": "Examine the following exhibit. What is the router ID for R1?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1# configure terminal\nR1(config)# interface loopback 0\nR1(config-if)# ip address 192.168.1.253 255.255.255.0\nR1(config-if)# interface ethernet 1/0\nR1(config-if)# ip address 192.168.1.1 255.255.255.0\nR1(config-if)# exit\nR1(config)# router ospf 1\nR1(config-router)# network 10.0.0.0\nR1(config-router)# end\nR1#"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "10.0.0.0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "192.168.1.253",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "192.168.1.1",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The router ID is currently unassigned.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 9.3.0",
          "explanation": "OSPF follows a specific three-step hierarchical process to select a Router ID (RID) when the routing process starts:\n\n• Manual Configuration: It first checks for a manually configured ID using the router-id command under the OSPF process.\n\n• Loopback Interface: If no manual ID is configured, it selects the highest IP address of any active loopback interface.\n\n• Physical Interface: In the absence of a loopback interface, it selects the highest IP address of any active physical interface.\n\nIn the provided exhibit, there is no manual router-id command configured within the router ospf 1 block. However, a loopback interface (Loopback 0) is configured with the IP address 192.168.1.253 [Exhibit]. Because a loopback interface exists and its IP address is numerically higher than the physical interface IP (192.168.1.1), OSPF automatically selects 192.168.1.253 as the Router ID for R1.\n\nNote that an interface does not need to be actively participating in OSPF via a network command to be considered for the Router ID selection; it only needs to be in an active (up/up) state."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "You enter the show ip nat translations command and do not see any translations. You are worried that there is a problem. What would be the most appropriate action to test the NAT operation?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Issue a ping from the router to any IP address in the outside network.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Verify the running configuration to find the configuration error.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Issue a ping from a device inside the network that should be translated.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Issue a traceroute from the router to any IP address in the outside network.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.6.0",
          "explanation": "In Cisco NAT operations, specifically for dynamic NAT and Port Address Translation (PAT), translation entries are not permanent and are only created when relevant traffic passes through the router. According to the sources, a router determines that a source address must be translated only when it receives the first packet from an internal host on a NAT-enabled inside interface.\n\nIf the show ip nat translations command shows an empty table, it is often because no active sessions are currently being translated or previous dynamic entries have timed out due to inactivity. Therefore, to test the NAT operation and populate the table, you should generate traffic (such as a ping) from an internal device that is eligible for translation.\n\nOther actions are less effective for testing:\n\n• Pinging or tracing from the router itself will typically use the router's own IP address, which is often already a public/global address and does not require translation, thus failing to test the logic intended for internal private hosts.\n\n• Verifying the configuration is a troubleshooting step to take after a test has failed, rather than the primary method to test the operation of the NAT engine itself."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "Which type of router is specific to a multiarea OSPF design?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "ASBR",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "ABR",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "internal router",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "backbone router",
              "isCorrect": false
            }
          ],
          "topic": "Topic 9.7.0",
          "explanation": "The Area Border Router (ABR) is the specific type of router required for a multiarea OSPF design because its primary function is to connect multiple areas together. An ABR maintains a separate Link-State Database (LSDB) for each area it is connected to and is responsible for summarizing routing information between those areas.\n\nIn contrast, the other router roles can exist in both single-area and multiarea designs:\n\n• Internal Router: These routers have all their interfaces in a single area. In a single-area design, every router is an internal router.\n\n• Backbone Router: These are routers with at least one interface in Area 0. If a single-area design uses Area 0, all routers in that design are backbone routers.\n\n• ASBR (Autonomous System Boundary Router): This router connects the OSPF domain to external routing domains (like the internet or another routing protocol). An ASBR can reside within a single-area OSPF network.\n\nTherefore, while internal, backbone, and ASBR routers are often part of a multiarea OSPF network, only the ABR is fundamentally unique to and required by a design involving more than one area."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "questionType": "choice",
          "question": "A router has learned three possible routes that could be used to reach a destination network. One route is from EIGRP and has a composite metric of 20584570. Another route is from OSPF with a metric of 842. The last is from RIPv2 and has a metric of 3. Which route or routes will the router install in the routing table?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RIPv2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "none of the above",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "EIGRP route",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "OSPF route",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "all three routes",
              "isCorrect": false
            }
          ],
          "topic": "Topic 8.6.2",
          "explanation": "When a router learns multiple paths to the same destination from different routing protocols, it uses a value called Administrative Distance (AD) to decide which route to install in the IP routing table. Administrative distance is a measure of the \"trustworthiness\" of the source protocol; the lower the AD, the more trusted the protocol is.\n\nThe router's decision-making process is as follows:\n\n• AD before Metric: The router first compares the administrative distance of the protocols. Metrics (such as RIP's hop count, OSPF's cost, or EIGRP's composite value) are only compared if multiple paths are learned from the same protocol.\n\n• Protocol Hierarchy: According to the sources, EIGRP has a lower administrative distance than OSPF, meaning EIGRP routes are preferred over OSPF routes regardless of the metric values. While OSPF has a default distance of 110, EIGRP is more trusted. RIPv2, as an older distance-vector protocol, typically has an even higher (less trusted) administrative distance than both EIGRP and OSPF.\n\nIn this scenario, even though the EIGRP metric is much larger than the others, the router will install the EIGRP route because its administrative distance makes it the most trustworthy source among the three."
        },
        {
          "id": 19,
          "originalNumber": 19,
          "questionType": "choice",
          "question": "Which protocol is described in RFC 7761 and uses shared distribution trees rooted at the RP, but may switch to the source-rooted distribution tree?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "PIM-DM",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "OSPFv3",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "MP-BGP with MSDP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PIM-SM",
              "isCorrect": true
            }
          ],
          "topic": "Topic 12.5.2",
          "explanation": "Protocol Independent Multicast - Sparse Mode (PIM-SM) is the specific protocol described in RFC 7761. PIM-SM operates by using shared distribution trees that are rooted at a Rendezvous Point (RP) to coordinate the forwarding of multicast traffic from a source to its receivers.\n\nA key characteristic of PIM-SM is that while it starts with a shared tree, it may switch to a source-rooted distribution tree (also known as a Shortest Path Tree or SPT). This transition typically occurs when a last-hop router exceeds a configured SPT threshold, allowing it to join the SPT and receive traffic directly from the source to reduce latency.\n\nIn contrast, PIM-DM (Dense Mode) uses a \"push\" model that only supports source trees and is incapable of building shared distribution trees rooted at an RP. OSPFv3 is a unicast routing protocol that can be used to populate the routing table but does not manage multicast distribution trees itself."
        },
        {
          "id": 20,
          "originalNumber": 20,
          "questionType": "choice",
          "question": "By default, what is the valid AS number range for a BGP process on a Cisco router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "1 to 256",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1 to 32,768",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "1 to 65,535",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "1 to 131,072",
              "isCorrect": false
            }
          ],
          "topic": "Topic 11.2.0\n\nA",
          "explanation": "utonomous Systems are identified by AS numbers, which are defined as 16-bit integers. This results in a valid range from 1 to 65,535.\n\nWithin this 16-bit range, numbers are categorized by their usage:\n\n• Public AS numbers: These range from 1 to 64,511 and are assigned and managed by the Internet Assigned Numbers Authority (IANA).\n\n• Private AS numbers: These range from 64,512 to 65,535 and are reserved for customers who need to run BGP within their private networks.\n\nThe sources also note that while 32-bit AS numbers were later created to address pool exhaustion, the standard 16-bit integer representation remains a fundamental part of BGP identification."
        },
        {
          "id": 21,
          "originalNumber": 21,
          "questionType": "choice",
          "question": "Which protocol uses a pull model, enabling multicast traffic to be sent only where it is requested?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "MP-BGP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "PIM-DM",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "PIM-SM",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "OSPFv3",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.5.2",
          "explanation": "Protocol Independent Multicast - Sparse Mode (PIM-SM) is based on an explicit pull model, meaning that multicast traffic is forwarded only to the specific parts of the network that have requested it. In this operation, receivers signal their interest via IGMP, and the last-hop routers send PIM join messages toward a Rendezvous Point (RP) to \"pull\" the data stream down the shared distribution tree.\n\nIn contrast, PIM-DM (Dense Mode) uses a push model, which floods multicast traffic to every corner of the network and then requires routers with no interested receivers to prune the unwanted traffic. PIM-SM is the optimal choice for production networks because it efficiently conserves bandwidth and router resources by avoiding this unnecessary flooding. Other protocols like OSPFv3 and MP-BGP are primarily unicast routing protocols used to populate the routing table rather than managing the multicast distribution \"pull\" logic."
        },
        {
          "id": 22,
          "originalNumber": 22,
          "questionType": "choice",
          "question": "Here is the show ip route command from router R1, which is load-balancing to the 10.80.13.0/30 network.\n\nOn R1, the following change was made. In which two ways will the EIGRP routing table and topology table be affected? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1> show ip route \nCodes: C - connected, S - static, R - RIP, M - mobile, B - BGP\n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area \n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2 \n       E1 - OSPF external type 1, E2 - OSPF external type 2 \n       * - candidate default, U - per-user static route \n       o - ODR, P - periodic downloaded static route \nGateway of last resort is not set\n  10.80.0.0/8 is variably subnetted, 11 subnets, 4 masks\nD    10.80.13.0/30 [90/2681856] via 10.80.234.3, 01:13:17, Serial0/0 \n                   [90/2681856] via 10.80.234.2, 01:13:17, Serial1/0 \nD    10.80.23.2/32 [90/2681856] via 10.80.234.2, 01:13:17, Serial0/0 \n<output omitted>"
            },
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1(config)# router eigrp 10\nR1(config-router)# maximum-paths 1"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "There will be no change in the routing table for the route 10.80.13.0/30.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The EIGRP routing table will have only one route for 10.80.13.0/30.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "The EIGRP topology table will have only one route for 10.80.13.0/30.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The EIGRP topology table will have no route for 10.80.13.0/30.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The EIGRP topology table will indicate both routes to the network 10.80.13.0/30.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 8.7.2",
          "explanation": "The configuration change on R1 involves the maximum-paths command, which dictates how many paths the EIGRP process installs in the router's IP routing table for a single destination.\n\n• Effect on the Routing Table: By default, Cisco IOS software allows EIGRP to install up to four equal-cost paths in the routing table. Configuring maximum-paths 1 explicitly disables load balancing. As a result, even though R1 has two valid, equal-cost paths to reach 10.80.13.0/30 (via 10.80.234.3 and 10.80.234.2), it will now only install one of those routes into the routing table.\n\n• Effect on the Topology Table: The EIGRP topology table functions as a database that contains all destination routes advertised by neighbor routers. Unlike the routing table, which only stores the \"best\" paths allowed by policy, the topology table retains information for every path learned from every adjacent neighbor. Limiting the number of paths installed in the routing table does not purge these entries from the protocol's underlying database. Therefore, the topology table will still show both routes to the network.\n\nIn conclusion, the maximum-paths command restricts the forwarding instructions (routing table) but does not limit the protocol's knowledge of the network structure (topology table)."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "questionType": "choice",
          "question": "Besides EIGRP, which other IGP protocol supports unequal load-balancing?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IS-IS",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "RIP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "OSPF",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "BGP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "None of the above",
              "isCorrect": true
            }
          ],
          "topic": "Topic 8.7.1",
          "explanation": "EIGRP is unique among routing protocols because it is the only one that supports both equal and unequal-cost path load balancing.\n\nWhile other Interior Gateway Protocols (IGPs) like OSPF and RIP support Equal-Cost Multipath (ECMP) load balancing using the maximum-paths command, they do not have a mechanism for balancing traffic across links with different metrics. EIGRP achieves unequal-cost load balancing through the variance command, which allows the router to install feasible successor routes into the routing table if their metric is less than the best metric multiplied by the variance value.\n\nRegarding the other options:\n\n• BGP is an Exterior Gateway Protocol (EGP) and is explicitly described as not being designed to perform load balancing; its selection process eliminates multiple paths until only a single best path remains.\n\n• OSPF and RIP are limited to equal-cost load balancing only.\n\nConsequently, since EIGRP is identified as the unique protocol with this capability, \"None of the above\" is the correct choice."
        },
        {
          "id": 24,
          "originalNumber": 24,
          "questionType": "choice",
          "question": "Which command is used to apply a distribute list to OSPF?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "config)# distribute list 1 in",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "config-std-nacl)# distribute-list 1 in",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "config-router)# distribute-list 1 out",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "config)# distribute-list 1 out",
              "isCorrect": false
            }
          ],
          "topic": "Topic 10.5.1\n\nA d",
          "explanation": "istribute list is a technique used to control routing updates by applying an access list to the routing process. To apply this filter, the distribute-list command must be configured under the routing protocol. This requirement means the command must be issued from the config-router prompt.\n\nThe behavior of distribute lists in OSPF is governed by specific rules:\n\n• distribute-list in: This command filters which routes the SPF process installs into the local IP routing table; it does not remove routes from the link-state database (LSDB).\n\n• distribute-list out: In OSPF, this command is used only on an ASBR and applies exclusively to redistributed routes, allowing the administrator to select which of those routes are advertised to other routers."
        },
        {
          "id": 25,
          "originalNumber": 25,
          "questionType": "choice",
          "question": "Which of the following correctly describes an EIGRP feasible successor route?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The best path",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "A suboptimal path",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "A backup path",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "A shorter path",
              "isCorrect": false
            }
          ],
          "topic": "Topic 8.3.1\n\nAn",
          "explanation": "EIGRP feasible successor is defined as the best alternative loop-free backup path to reach a destination. While the successor is the primary route with the lowest metric and is installed in the routing table, the feasible successor is stored in the topology table but is not used for active forwarding unless the primary path fails.\n\nTo qualify as a feasible successor and ensure the path is loop-free, a route must satisfy the feasibility condition: the neighbor's Advertised Distance (the metric for that neighbor to reach the destination) must be less than the Feasible Distance (the current best metric) of the existing successor. The primary advantage of having a feasible successor is that it allows the router to recover immediately from a link failure by promoting the backup route to the routing table without the delay of performing a new route recomputation."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "questionType": "choice",
          "question": "Network administrators use the route map tool for many purposes. Which three options are more common applications for route maps? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "autonomous system synchronization",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "network monitoring",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "network topology mapping",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "route filtering with redistribution",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "policy-based routing",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "BGP",
              "isCorrect": true
            }
          ],
          "topic": "Topic 10.5.4\n\nN",
          "explanation": "etwork administrators use route maps for several sophisticated network tasks. The three most common applications are:\n\n• Route filtering during redistribution: Redistribution between different routing protocols almost always requires some filtering. Route maps are preferred for this because, unlike basic distribute lists, they allow administrators to also manipulate routing metrics using set commands during the redistribution process.\n\n• Policy-based routing (PBR): Route maps are used to identify specific traffic based on source/destination addresses, protocol types, or applications. Once matched, a set command dictates a specific interface or next-hop address for that traffic, allowing administrators to define a routing policy that differs from standard destination-based routing.\n\n• BGP (Border Gateway Protocol): Route maps are the primary tools for implementing BGP policies. They are assigned to specific BGP neighbor sessions to control which routes enter or leave the BGP process and to perform sophisticated manipulation of BGP path attributes.\n\nThe other options provided—autonomous system synchronization, network monitoring, and network topology mapping—are not listed as common applications for route maps in the source material."
        },
        {
          "id": 27,
          "originalNumber": 27,
          "questionType": "choice",
          "question": "Which TCP port does BGP use to establish a BGP session?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "441",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "21",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "179",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "81",
              "isCorrect": false
            }
          ],
          "topic": "Topic 11.2.1",
          "explanation": "Border Gateway Protocol (BGP) uses TCP port 179 as its transport mechanism. By using TCP, BGP ensures reliable connection-oriented delivery, which means the protocol does not need to implement its own error recovery or retransmission mechanisms.\n\nA BGP speaker must establish a TCP session with its neighbor before any routing updates can be exchanged. Once this TCP relationship is formed, the neighbors can begin sending open messages and eventually exchange their routing tables via update messages. This reliance on TCP also allows BGP to scale effectively, as it can leverage the TCP sliding window mechanism to stream large amounts of routing data without waiting for an individual acknowledgment for every packet."
        },
        {
          "id": 28,
          "originalNumber": 28,
          "questionType": "choice",
          "question": "You have a web server with a private IP address within your network. You want users from the internet to access it. Which type of NAT do you use?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "DHCP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "static NAT",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "dynamic NAT",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PAT",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.4.1",
          "explanation": "Static NAT is the correct choice for this scenario because it provides a one-to-one mapping between a specific private (inside local) IPv4 address and a public (inside global) IPv4 address.\n\nKey reasons for using static NAT for a web server include:\n\n• External Initiation: Unlike dynamic NAT or PAT, which are primarily designed for internal hosts reaching out to the internet, static NAT specifically allows external devices to initiate connections to internal devices.\n\n• Persistent Mapping: Static translations are permanent and continuously remain in the translation table, regardless of whether they are actively being used. This ensures that the web server is always reachable at the same public IP address.\n\n• Specific Use Case: The source material explicitly states that static NAT is used when a company has a server that needs to be accessible from outside the network, citing a web server as a primary example.\n\nIn contrast, dynamic NAT and PAT are typically used to allow internal users to share public addresses when accessing the internet, and they do not inherently provide the permanent, externally-reachable entry required for a public-facing server. DHCP is used for assigning addresses to hosts, not for translating them for internet access."
        },
        {
          "id": 29,
          "originalNumber": 29,
          "questionType": "choice",
          "question": "Which translation technology would typically be used at home, especially for connecting devices such as tablets, phones, and PCs through a cable internet connection?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "static NAT",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "dynamic NAT",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "PAT",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "double NAT",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.4.0",
          "explanation": "Port Address Translation (PAT), also known as NAT overloading, is the specific technology typically used in home environments. Most home routers operate in this manner because an Internet Service Provider (ISP) usually assigns only one public IPv4 address to the router, yet multiple devices within the home—such as PCs, tablets, and phones—need to access the internet simultaneously.\n\nPAT works by mapping multiple private IPv4 addresses to a single public IPv4 address. To distinguish between the different internal devices, the router tracks unique TCP or UDP port numbers for each session. This allows the router to accurately return incoming traffic from the internet to the specific device that requested it.\n\nIn contrast:\n\n• Static NAT is a one-to-one mapping generally used for servers that need to be accessible from the outside.\n\n• Dynamic NAT (without overloading) maps a group of private addresses to a pool of multiple public addresses and does not allow for the many-to-one sharing characteristic of home internet connections."
        },
        {
          "id": 30,
          "originalNumber": 30,
          "questionType": "choice",
          "question": "What is the difference between static NAT and dynamic NAT?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Static NAT maps many-to-one, and dynamic NAT maps many-to-many.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Static NAT maps one-to-one, and dynamic NAT maps one-to-many.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Static NAT maps one-to-one, and dynamic NAT maps many-to-many.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Static NAT maps one-to-many, and dynamic NAT maps many-to-one.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.4.0",
          "explanation": "The primary difference lies in how internal addresses are mapped to external addresses:\n\n• Static NAT performs a one-to-one mapping between a private IPv4 address and a public IPv4 address. This type of translation is permanent and is typically used when an internal device, such as a web server, must be consistently accessible from the outside network using a specific public address.\n\n• Dynamic NAT maps a group of private IPv4 addresses to a group or pool of available public IPv4 addresses, effectively creating a many-to-many mapping. When an internal host needs to communicate externally, the router dynamically selects an unused address from the pool and creates a temporary translation entry.\n\nThe other options are incorrect because many-to-one mapping is specifically the characteristic of Port Address Translation (PAT), also known as NAT overloading, which allows multiple hosts to share a single public IP address by using different port numbers."
        },
        {
          "id": 31,
          "originalNumber": 31,
          "questionType": "choice",
          "question": "Which command will display which router interfaces are configured as NAT inside interfaces?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show ip nat interfaces",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show ip nat statistics",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "show ip nat translations",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show ip interface",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.6.2",
          "explanation": "The show ip nat statistics command is the correct tool to verify which router interfaces have been designated for NAT operations.\n\nWhen this command is executed, the output includes specific sections for:\n\n• Outside interfaces: Lists all interfaces configured with the ip nat outside command.\n\n• Inside interfaces: Explicitly lists all interfaces configured with the ip nat inside command.\n\nWhile other commands like show ip nat translations display the active mapping table, they do not provide a summary of the interface roles themselves. The show ip nat statistics command is used specifically in the source material to verify that previous configuration steps were successful and that the expected interfaces are participating in the NAT process."
        },
        {
          "id": 32,
          "originalNumber": 32,
          "questionType": "choice",
          "question": "What are three important changes to IGMPv1 that were implemented in IGMPv2? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "team-specific queries",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "leave-group message",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "group-specific queries",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "stop-group message",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "membership reports",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "querier election mechanism",
              "isCorrect": true
            }
          ],
          "topic": "Topic 12.3.2",
          "explanation": "IGMPv2 addressed several limitations found in IGMPv1 by introducing the following key features:\n\n• Group-specific queries: While IGMPv1 used general queries sent to the all-hosts address (224.0.0.1), IGMPv2 added the ability for a router to query a single specific multicast group. This optimization allows the router to quickly determine if any members remain in a specific group without querying every group on the segment.\n\n• Leave-group message: Unlike IGMPv1, which relied on timeouts to determine when a host had left a group, IGMPv2 allows hosts to actively send a leave-group message. This drastically reduces leave latency, especially when the host leaving is the last member of that group on the segment.\n\n• Querier election mechanism: IGMPv2 implemented a standardized method to elect a single querier when multiple routers exist on the same segment. The router with the lowest unicast IP address is elected as the querier, whereas IGMPv1 lacked a formal election process.\n\nAdditionally, IGMPv2 introduced a query-interval response time to control the \"burstiness\" of membership reports by specifying how much time members have to respond to a query."
        },
        {
          "id": 33,
          "originalNumber": 33,
          "questionType": "choice",
          "question": "Which OSPF network type must be statically configured for DR/BDR election to occur?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "broadcast",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "point-to-point",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "point-to-multipoint",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "loopback",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "nonbroadcast",
              "isCorrect": true
            }
          ],
          "topic": "Topic 9.9.0",
          "explanation": "The nonbroadcast network type is used on multiaccess networks that interconnect more than two routers but lack inherent broadcast or multicast capabilities, such as Frame Relay or ATM. Because the network cannot flood OSPF Hello packets to discover peers, neighbors must be statically configured by the administrator. Once these manual neighbor relationships are defined, OSPF proceeds to perform a DR/BDR election to optimize the exchange of routing information and manage link-state synchronization on the segment.\n\nOther network types behave differently:\n\n• Broadcast: Also performs a DR/BDR election, but it uses multicast to discover neighbors dynamically rather than requiring static configuration.\n\n• Point-to-point: Uses multicast for dynamic discovery but has no DR/BDR election because only two routers can exist on the segment.\n\n• Point-to-multipoint: Discovers neighbors dynamically using multicast and has no DR/BDR election.\n\n• Loopback: Is the default for loopback interfaces and does not involve DR/BDR elections."
        },
        {
          "id": 34,
          "originalNumber": 34,
          "questionType": "choice",
          "question": "A prefix list can filter on which option?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "classful subnet and port",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "prefix and prefix length",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "prefix and port number",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "protocol and prefix",
              "isCorrect": false
            }
          ],
          "topic": "Topic 10.5.2",
          "explanation": "Prefix lists are specialized tools designed for route filtering that offer superior performance compared to traditional access lists. Their primary capability is the ability to filter routing updates based on both the network prefix and the prefix length.\n\nThe sources highlight several advantages and characteristics of prefix lists:\n\n• Granular Matching: A prefix list can specify the exact size of a subnet mask or indicate a range within which the mask must fall to pass the test.\n\n• Efficiency: The router transforms a prefix list into a tree structure, allowing it to determine a \"permit\" or \"deny\" verdict much faster than the sequential processing required by access lists.\n\n• Specialization: While access lists were originally designed for packet filtering and later extended to routes, prefix lists are intended specifically for route filtering.\n\nOptions involving port numbers are incorrect because prefix lists operate at the routing level (Layer 3) to evaluate network addresses and masks, whereas port numbers are part of the transport layer (Layer 4) used for packet filtering."
        },
        {
          "id": 35,
          "originalNumber": 35,
          "questionType": "choice",
          "question": "Which command will display how long a BGP peering relationship has been up?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show ip bgp",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show ip bgp summary",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "show ip bgp peer",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show ip bgp all",
              "isCorrect": false
            }
          ],
          "topic": "Topic 11.7.2",
          "explanation": "The show ip bgp summary command is used to verify the state of BGP sessions. The output of this command displays a table with current neighbor statuses, where each line provides information for a specific neighbor.\n\nSpecifically, the column labeled Up/Down in the output indicates how long the neighbor has been in the current state. In BGP operation, if the relationship is \"Established,\" the state name itself is not displayed; instead, the number of prefixes received from that neighbor is shown in the final column. Therefore, the time value in the Up/Down column reflects exactly how long the peering relationship has been up and running.\n\nWhile the show ip bgp neighbors command (not listed as an option) also provides this information in a detailed per-neighbor format (e.g., \"up for 00:01:16\"), show ip bgp summary is the standard administrative command used to view the uptime of all peering relationships simultaneously. Other commands like show ip bgp are used to view the BGP routing table itself rather than session statistics."
        },
        {
          "id": 36,
          "originalNumber": 36,
          "questionType": "choice",
          "question": "Which protocol is a Cisco proprietary mechanism that permits backup RPs to be configured for failover?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "phantom RP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "embedded RP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Auto-RP",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Anycast-RP",
              "isCorrect": false
            }
          ],
          "topic": "Topic 12.6.3\n\nA",
          "explanation": "uto-RP is a Cisco proprietary mechanism designed to automate the distribution of Rendezvous Point (RP) information within a multicast network. It operates using candidate RPs, which announce their availability, and RP-mapping agents, which map those RPs to specific multicast groups.\n\nA primary benefit of Auto-RP is that it permits backup RPs to be configured, which enables an effective failover mechanism should the primary RP become unavailable. In contrast, the Bootstrap Router (BSR) mechanism is identified as a nonproprietary method. While Anycast-RP can also provide redundancy, the sources specifically highlight Auto-RP as the Cisco proprietary tool that automates this process and supports backup RP configurations."
        },
        {
          "id": 37,
          "originalNumber": 37,
          "questionType": "choice",
          "question": "Which statement about OSPF neighbor adjacencies is correct?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The hello/dead timers, area IDs, and authentication information must match within the LSAck messages for two devices to form an OSPF neighbor relationship.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Only the hello/dead timers and authentication information must match within the hello messages for two devices to form an OSPF neighbor relationship. Area IDs and router IDs must be unique.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The hello/dead timers, area IDs, and authentication information must match within the hello messages for two devices to form an OSPF neighbor relationship.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "The hello/dead timers, area IDs, and router ID information must match within the hello messages for two devices to form an OSPF neighbor relationship.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The hello/dead timers, area IDs, and authentication information must be unique within the DBD messages for two devices to form an OSPF neighbor relationship.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 9.4.0",
          "explanation": "OSPF routers use the Hello protocol to discover neighbors and establish adjacencies. For a neighbor relationship to form, routers must agree on specific parameters carried within their hello messages.\n\nSpecifically, the following information must match:\n\n• Hello and Dead Intervals: These timers specify how often hello packets are sent and how long a router waits before declaring a neighbor down. If these are mismatched, an adjacency will not be established.\n\n• Area ID: Neighbors must share a common segment and their interfaces must be assigned to the same OSPF area.\n\n• Authentication Data: If authentication is enabled, both routers must use the same authentication type and exchange matching keys.\n\n• Stub Area Flag: Routers must also agree on whether the area is a stub area.\n\nIn contrast, Router IDs must be unique for each router within an OSPF network to avoid identification issues and potential outages; they should not match between neighbors. Furthermore, these compatibility checks occur during the initial hello packet exchange, not within LSAck, DBD, or other subsequent packet types."
        },
        {
          "id": 38,
          "originalNumber": 38,
          "questionType": "choice",
          "question": "Refer to the output of the show ip protocols command. Which two EIGRP metrics are being used to affect the calculation that selects the best path to add to the EIGRP routing table? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1# show ip protocols \n*** IP Routing is NSF aware ***\n\nRouting Protocol is \"eigrp 65010\"\n  Outgoing update filter list for all interfaces is not set\n Incoming update filter list for all interfaces is not set\n Default networks flagged in outgoing updates\n Default networks accepted from incoming updates\n EIGRP-IPv4 Protocol for AS(65010)\n    Metric weight K1=1, K2=0, K3=1, K4=0, K5=0\n    NSF-aware route hold timer is 240\n    Router-ID: 172.16.1.1 \n    Topology : 0 (base) \n       Active Timer: 3 min\n       Distance: internal 90 external 170\n       Maximum path: 4\n       Maximum hopcount 100\n       Maximum metric variance 1\n  Automatic Summarization: disabled\n  Maximum path: 4\n  Routing for Networks:\n  Routing Information Sources:\n    Gateway         Distance      Last Update\n  Distance: internal 90 external 170"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "load",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "delay",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "MTU",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "reliability",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "bandwidth",
              "isCorrect": true
            }
          ],
          "topic": "Topic 8.5.1",
          "explanation": "The output of the show ip protocols command displays the metric weights as K1=1, K2=0, K3=1, K4=0, K5=0. In EIGRP, these K-values are coefficients used in the composite metric formula where K1 represents bandwidth and K3 represents delay. Because only K1 and K3 are set to 1 while the other weights are 0, EIGRP uses only the bandwidth and delay values to calculate the total metric and select the best path (successor) for the routing table. Metrics such as load (K2), reliability (K4), and MTU (K5) are excluded from the calculation in this configuration."
        },
        {
          "id": 39,
          "originalNumber": 39,
          "questionType": "matching",
          "question": "Match the correct term with the description.",
          "chooseCount": 4,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Router interface",
              "answer": "Link"
            },
            {
              "id": "p2",
              "prompt": "Collection of networks under a common administration",
              "answer": "Autonomous system"
            },
            {
              "id": "p3",
              "prompt": "Interface relationship to neighboring routers",
              "answer": "State"
            },
            {
              "id": "p4",
              "prompt": "Grouping of contiguous networks",
              "answer": "Area"
            }
          ],
          "options": [],
          "topic": "Topic 9.2.0",
          "explanation": null
        },
        {
          "id": 40,
          "originalNumber": 40,
          "questionType": "choice",
          "question": "Which two options play primary roles in route summarization? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Network numbers in areas should be assigned contiguously.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "VRRP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "FLSM",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Network numbers in areas should be assigned discontinuously.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "VLSM",
              "isCorrect": true
            }
          ],
          "topic": "Topic 10.6.1",
          "explanation": "Route summarization, or route aggregation, is the process of advertising a contiguous set of addresses as a single address with a shorter subnet mask. To achieve this efficiently, network numbers must be assigned contiguously so they can be grouped into the smallest possible number of summary addresses. Additionally, because OSPF is a classless routing protocol, it supports VLSM (Variable Length Subnet Mask), allowing it to carry subnet mask information and consolidate multiple specific subnets into a single summary prefix."
        },
        {
          "id": 41,
          "originalNumber": 41,
          "questionType": "choice",
          "question": "Which statement correctly defines one major difference between route maps and access lists?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Access lists can use a match and set commands to modify the packet.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Route maps can use the set commands to modify the packet or route.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Route maps can use the set commands to modify the packet header.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Route maps can use a forward command to route the packet.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 10.5.3",
          "explanation": "Route maps are more sophisticated than access lists, operating with logic similar to if-then scripts. While access lists are primarily designed for simple filtering (permit/deny), the major difference is that route maps use match commands to identify conditions and set commands to modify attributes of the packet or route. These set commands allow administrators to change specific characteristics, such as routing metrics during redistribution or next-hop addresses in Policy-Based Routing."
        },
        {
          "id": 42,
          "originalNumber": 42,
          "questionType": "choice",
          "question": "You issue the command clear ip nat translation *. However, the translation table still displays NAT entries. Which two reasons can possibly cause this issue? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Static entries never remain in the translation table but must be refreshed.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The command is not correct.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Static entries constantly remain in the translation table.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "The translations are still in use by a host.",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "PAT entries constantly remain in the translation table.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 13.6.1",
          "explanation": "The command clear ip nat translation * is used to remove dynamic NAT entries from the translation table. However, entries may still appear for two primary reasons:\n\n• Static Entries: Unlike dynamic entries, static translations continuously remain in the translation table regardless of their use; they are persistent and not removed by the clear command.\n\n• Translations in Use: If a host is currently generating traffic (such as an active Telnet or ICMP session), the router will immediately recreate the dynamic translation entry the moment the next packet arrives, making it appear as though the entry was never removed."
        },
        {
          "id": 43,
          "originalNumber": 43,
          "questionType": "choice",
          "question": "What are the three steps in creating a route map? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Create a profile.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Name the route map.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Add the match statement.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Select a protocol.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Add the action.",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "Activate the interface.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 10.5.4",
          "explanation": "Route map configuration generally consists of three essential parts:\n\n• Name the route map: Defining a unique name to identify the specific route map and its sequence.\n\n• Add the match statement: Defining the conditions (match action) to identify which packets or routes are subject to the map.\n\n• Add the action: Defining the \"set\" action or parameters to be performed if the match criteria are met.\n\nOnce these configuration steps are complete, the route map must then be applied (e.g., in a redistribution command or attached to an interface) to take effect."
        },
        {
          "id": 44,
          "originalNumber": 44,
          "questionType": "choice",
          "question": "What does the passive interface command do in EIGRP?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The passive-interface command in EIGRP suppresses the exchange of hello packets between two routers, which results in the loss of their neighbor relationship. Also, it does suppress the incoming routing packets.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The router cannot receive routing updates on that interface.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The router cannot form neighbor adjacencies on that interface.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The router cannot send routing updates on that interface.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 8.4.0",
          "explanation": "In EIGRP, the passive-interface command stops the interface from sending and receiving Hello packets, which are required to discover neighbors and establish adjacencies. Because no adjacency can be formed, the router cannot exchange routing information with other EIGRP routers on that segment. Furthermore, the command specifically suppresses incoming routing packets, preventing the router from learning any EIGRP updates through that interface."
        },
        {
          "id": 45,
          "originalNumber": 45,
          "questionType": "choice",
          "question": "Refer to the output of the show ip protocols command. Which statement is true about the router configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1# show ip protocols\n*** IP Routing is NSF aware ***\n\nRouting Protocol is \"eigrp 65010\"\n  Outgoing update filter list for all interfaces is not set\n  Incoming update filter list for all interfaces is not set\n  Default networks flagged in outgoing updates\n  Default networks accepted from incoming updates\n  EIGRP-IPv4 Protocol for AS(65010)\n    Metric weight K1=1, K2=0, K3=1, K4=0, K5=0\n    NSF-aware route hold timer is 240\n    Router-ID: 172.16.1.1 \n    Topology : 0 (base)\n      Active Timer: 3 min\n      Distance: internal 90 external 170\n      Maximum path: 4\n      Maximum hopcount 100\n      Maximum metric variance 1\n  Automatic Summarization: disabled\n  Maximum path: 4\n  Routing for Networks:\n  Routing Information Sources:\n    Gateway         Distance      Last Update \n  Distance: internal 90 external 170"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The variance is set to the default value of 1, which requires all paths to have the same cost to be eligible for load balancing.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The router is configured per-destination and per-packet load balancing.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The router is configured to load balance over unequal-cost paths.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The router is configured with automatic summarization.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 8.7.3",
          "explanation": "The output of the show ip protocols command shows \"Maximum metric variance 1.\" In EIGRP, the default variance is 1, which means the router will only perform load balancing across paths that have the exact same metric (equal-cost). To enable unequal-cost load balancing, the variance must be configured to a value greater than 1 (up to 128). Additionally, the output explicitly states \"Automatic Summarization: disabled,\" making that option incorrect [Source Output]. EIGRP's load balancing is also typically performed on a per-conversation (destination) basis rather than per-packet."
        }
      ]
    }
  }
};
