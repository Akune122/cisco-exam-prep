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
        "id": "ccnp-encor-v9-switching",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 1 – 7",
        "title": "Checkpoint Exam : Network Switching (Modules 1 – 7)",
        "dataFile": "data/exams/ccnp-encor-v9-switching.json",
        "totalQuestions": 58,
        "quizChunkSize": 10,
        "examModeQuestionCount": 58,
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
      },
      {
        "id": "ccnp-encor-v9-security",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 14 – 16",
        "title": "Checkpoint Exam : Network Security (Modules 14 – 16)",
        "dataFile": "data/exams/ccnp-encor-v9-security.json",
        "totalQuestions": 28,
        "quizChunkSize": 10,
        "examModeQuestionCount": 28,
        "passingScorePercent": 70,
        "status": "active"
      },
      {
        "id": "ccnp-encor-v9-virtualization",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 17 – 20",
        "title": "Checkpoint Exam : Virtualization & Network Services (Modules 17 – 20)",
        "dataFile": "data/exams/ccnp-encor-v9-virtualization.json",
        "totalQuestions": 30,
        "quizChunkSize": 10,
        "examModeQuestionCount": 30,
        "passingScorePercent": 70,
        "status": "active"
      },
      {
        "id": "ccnp-encor-v9-programmability",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 21 – 22",
        "title": "Checkpoint Exam : Programmability (Modules 21 – 22)",
        "dataFile": "data/exams/ccnp-encor-v9-programmability.json",
        "totalQuestions": 17,
        "quizChunkSize": 10,
        "examModeQuestionCount": 17,
        "passingScorePercent": 70,
        "status": "active"
      },
      {
        "id": "ccnp-encor-v9-sdn",
        "categoryId": "ccnp-v9",
        "categoryName": "CCNP ENCOR v9",
        "code": "Modules 23 – 26",
        "title": "Checkpoint Exam : Software-Defined Networking (Modules 23 – 26)",
        "dataFile": "data/exams/ccnp-encor-v9-sdn.json",
        "totalQuestions": 33,
        "quizChunkSize": 10,
        "examModeQuestionCount": 33,
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
    "ccnp-encor-v9-switching": {
      "id": "ccnp-encor-v9-switching",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 1 – 7",
      "title": "Checkpoint Exam : Network Switching (Modules 1 – 7)",
      "description": "Examen Checkpoint officiel sur la commutation réseau (Architecture Campus, CEF, VLANs, Trunks, STP/RSTP/MST, EtherChannel LACP/PAgP, HSRP/VRRP/GLBP, QoS) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-1-7-checkpoint-exam-network-switching-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 58,
      "passingScorePercent": 70,
      "totalQuestions": 58,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "What is the default factor in STP that determines the cost of the path associated with a link?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "the duplex of the link",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "the type of link",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "the speed of the link",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "the bridge priority",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.3.2",
          "explanation": "In the Spanning Tree Protocol (STP), the path cost is a critical metric used to determine the best loop-free path from a nonroot bridge to the root bridge. By default, this cost is automatically calculated based on the speed or bandwidth of the link. The protocol uses an inverse relationship where links with higher bandwidth are assigned lower cost values, while slower links are assigned higher costs. This logic ensures that STP prefers faster paths for data transmission when electing root ports and designated ports. Although network administrators have the flexibility to manually configure these costs to manipulate the active topology for specific traffic engineering needs, the default operational behavior of a switch relies entirely on the detected interface speed to establish the most efficient, redundant network environment."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "Which of these is the calculation used to determine the root port in the spanning-tree calculation?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "the first port that becomes active",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "the port with the fastest speed",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "the port with the lowest cost to the root",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "the port that the neighbor switch will forward traffic to",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.3.2",
          "explanation": "In the Spanning Tree Protocol (STP) operation, after the root bridge has been elected, every non-root bridge must determine its best path back to that root bridge. The switch achieves this by evaluating the cumulative path cost, which represents the sum of the costs of all links leading to the root. The specific interface that offers the lowest cost to the root is designated as the root port. While these path costs are calculated based on the bandwidth of the links by default, the final decision in the spanning-tree calculation specifically relies on identifying the port with the minimum cumulative cost value to ensure the most efficient, loop-free path is selected for traffic forwarding."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Which option is the first criteria in MST used to choose the best path to the root bridge?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "lowest sender BID",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "highest BID",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "lowest root path cost",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "lowest sender port ID",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.7.4",
          "explanation": "In Multiple Spanning Tree (MST), once the root bridge has been identified, every non-root device must determine the most efficient path to reach it. The protocol utilizes a specific hierarchical sequence of criteria for this calculation, with the lowest root path cost being the primary and first factor considered. This cost is determined by the cumulative bandwidth of the links leading back to the root bridge, where faster links result in lower costs. If and only if multiple paths share the same minimum cost, the protocol will then proceed to evaluate subsequent tie-breakers, which include the lowest sender Bridge ID (BID) and finally the lowest sender Port ID. By prioritizing the path cost first, MST ensures that data is forwarded through the highest-capacity route available while maintaining a loop-free topology."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "Which command will allow an administrator to view which MAC addresses are mapped to which ports on a Cisco Catalyst switch?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show address-table",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show mac address-table",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show mac-address table",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "show address table",
              "isCorrect": false
            }
          ],
          "topic": "Topic 3.4.2",
          "explanation": "The show mac address-table command is the standard diagnostic tool used to display the contents of the Content-Addressable Memory (CAM) table on a Cisco Catalyst switch. This table is fundamental to Layer 2 operation, as it maps learned source MAC addresses to the specific physical ports and VLANs where they were detected. When a switch receives a frame, it records the source address and the inbound port to build this forwarding database, allowing it to forward subsequent traffic to the correct destination rather than flooding it out of all ports. By executing this command in privileged EXEC mode, an administrator can effectively verify device connectivity, troubleshoot VLAN assignment errors, and monitor how the switch is dynamically learning about the attached network environment. Additionally, the command allows for specific views, such as filtering by a particular interface or VLAN, which is essential for isolating connectivity issues in complex campus designs."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which option is not an RSTP port state?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "learning",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "blocking",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "discarding",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "forwarding",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.5.7",
          "explanation": "In the evolution from the original 802.1D Spanning Tree Protocol (STP) to the 802.1w Rapid Spanning Tree Protocol (RSTP), the number of port states was reduced and simplified to allow for faster convergence. While traditional STP utilizes five distinct states—disabled, blocking, listening, learning, and forwarding—RSTP consolidates the first three into a single state known as discarding. In the discarding state, the port does not forward user data or learn MAC addresses, though it can still process BPDUs. The learning and forwarding states remain functionally similar across both versions of the protocol. Because the functionalities of the old blocking and listening states are now merged into discarding, \"blocking\" is technically no longer a valid port state in an RSTP-enabled environment."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "What does a host without a dynamic routing protocol do when the only default gateway it has configured is unreachable?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "It performs ARP to determine the next gateway to use.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "It forwards packets to the backup router.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It uses Cisco Discovery Protocol to determine the next available router.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It is unable to send packets off the local network segment.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 5.2.0",
          "explanation": "Most end devices, such as workstations, servers, and printers, are configured with a single static default gateway IP address and do not typically run dynamic routing protocols to learn about network changes. Because these hosts lack the ability to dynamically update their routing information, they rely entirely on that specific gateway to reach any destination outside their local subnet. If that primary gateway becomes unreachable or fails, the host has no mechanism to automatically discover a backup router or an alternative path. As a result, even if redundant routers are physically present on the same segment, the host remains isolated from the rest of the network and is unable to send packets off the local network segment."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which two of the following commands can be used to check the status of the member interfaces and the logical channel interface? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show etherchannel group-number detail",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "show ip interface brief",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show etherchannel load-balance",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show etherchannel traffic",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show etherchannel summary",
              "isCorrect": true
            }
          ],
          "topic": "Topic 6.6.0",
          "explanation": "To effectively monitor and troubleshoot an EtherChannel bundle, network administrators utilize specific diagnostic commands that reveal the health of both the logical port-channel and its underlying physical member interfaces. The show etherchannel summary command is the most common tool, providing a concise one-line status for each channel group that indicates whether the logical interface is functional and which specific ports are successfully bundled, suspended, or operating independently. For a more comprehensive analysis, the show etherchannel <group-number> detail command provides granular data regarding the port-channel's operational state and protocol-specific parameters, which is essential for identifying why a link might not be aggregating correctly. While other commands like show etherchannel load-balance and show etherchannel traffic are useful for analyzing the distribution of frames across links or viewing throughput statistics, they do not provide the primary status information required to verify if the interfaces are correctly bundled into the logical channel. Therefore, these two specific commands are the standard for verifying the basic operational integrity of a Layer 2 or Layer 3 EtherChannel."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "choice",
          "question": "Which statement about QoS trust boundaries or domains is true?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The trust boundary is always a router.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The IP phone is a common trust boundary.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "The service provider and the enterprise network need to be one single trust domain or else routing will not work.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PCs, printers, and tablets are usually part of a trusted domain.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.3.2",
          "explanation": "In network design, a trust boundary is the specific point where a device identifies and marks traffic, determining whether the existing QoS markings on a packet should be accepted or rewritten before it enters the trusted domain. An IP phone is a classic example of a common trust boundary because it can classify its own voice traffic as high priority while treating data from an attached PC as untrusted, ensuring that only legitimate markings are propagated through the network. By contrast, end-user devices such as PCs, printers, and tablets are typically categorized as part of an untrusted domain because their traffic markings cannot be verified and could be manipulated by users to seek unfair priority. While trust boundaries are frequently established at the edge switch in campus environments, they are not strictly limited to routers, and it is common for enterprise and service provider networks to maintain distinct trust domains rather than a single shared one. Establishing these boundaries allows administrators to protect network resources by only acting upon markings from devices they manage, thereby preventing congestion caused by unauthorized or malicious traffic prioritization."
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "matching",
          "question": "Place the steps to configure EtherChannel in the correct order.",
          "chooseCount": 4,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Step 1",
              "answer": "Identify the ports to use on each switch"
            },
            {
              "id": "p2",
              "prompt": "Step 2",
              "answer": "Configure the channel group on the interface"
            },
            {
              "id": "p3",
              "prompt": "Step 3",
              "answer": "Configure the port channel interface"
            },
            {
              "id": "p4",
              "prompt": "Step 4",
              "answer": "Verify connectivity"
            }
          ],
          "options": [],
          "topic": "Topic 6.4.0",
          "explanation": null
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which command can be used to set the aging time of entries in the MAC address table?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "address-table [time] aging-time",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "mac address-table aging-time [time]",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "mac aging-time [time]",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "address-table aging-time [time]",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "mac address-table [time] aging-time",
              "isCorrect": false
            }
          ],
          "topic": "Topic 3.4.2",
          "explanation": "The mac address-table aging-time command is the standard global configuration command used to set the duration that a dynamically learned entry remains in the switch's MAC address table before being removed due to inactivity. By default, most Cisco Catalyst switches utilize an aging timer of 300 seconds, but administrators can modify this value to optimize how the switch manages its Content-Addressable Memory (CAM) table. Reducing the aging time can help clear out stale entries more quickly in highly dynamic environments, while increasing it can prevent excessive unknown unicast flooding by keeping addresses in the table for longer periods. While the show mac address-table command is primarily used for verification and troubleshooting, the aging-time configuration is essential for maintaining the overall efficiency and accuracy of the Layer 2 forwarding database."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "Assuming interface FastEthernet 0/3 is up, which two commands would allow you to verify that the interface is set to trunk mode? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show interface trunk",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "show interface FastEthernet0/3 switchport",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "show vlan all",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show interface vlan",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show interface FastEthernet0/3",
              "isCorrect": false
            }
          ],
          "topic": "Topic 3.3.2",
          "explanation": "To verify whether a specific interface like FastEthernet 0/3 is correctly operating in trunk mode, network administrators typically rely on two primary verification commands that provide different levels of detail. The show interfaces trunk command is an essential tool because it displays a concise summary of all interfaces currently functioning as trunks, explicitly showing their operational status, the encapsulation type (such as 802.1Q), the native VLAN, and the range of VLANs allowed to pass across the link. Alternatively, the show interface FastEthernet0/3 switchport command provides a more granular look at the Layer 2 configuration of that specific port, allowing a technician to distinguish between the \"Administrative Mode\" (the configured setting) and the \"Operational Mode\" (the actual current state). This is particularly important in environments using negotiation protocols like DTP, as it confirms that the port has successfully transitioned into trunking mode. While commands like show vlan can show which access ports are assigned to specific VLANs, they do not typically list trunk ports because trunks are not members of a single VLAN but rather carry traffic for many. Therefore, combining these two commands provides a definitive confirmation of the trunk's operational integrity and configuration."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "Which redundancy mode on Catalyst switches has the effect of the standby module reloading every other module and initializing all supervisor functions?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RPR",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "HSRP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "RPR+",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "VRRP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "SSO",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.7.0",
          "explanation": "Route Processor Redundancy (RPR) is a redundancy mode on Cisco Catalyst switches where the standby supervisor module is only partially booted and initialized. Because it is not fully ready to take over, when the active supervisor fails, the standby module must reload every other module in the chassis and then initialize all the supervisor functions from scratch. This process results in a significant delay during failover because the switch essentially performing a cold start for its line cards and internal processes. This is distinct from more advanced modes like RPR+, which does not reload other modules, or Stateful Switchover (SSO), which maintains Layer 2 information to ensure a near-seamless transition without link flapping."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which advanced classification tool can be used to classify data applications?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "PDLM",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "ToS",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "NBAR",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "DSCP",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.4.3\n\nN",
          "explanation": "BAR (Network-Based Application Recognition) is a sophisticated classification tool that operates from Layer 4 to Layer 7 of the OSI model, providing far more granular visibility than traditional methods. Unlike basic classifiers that rely on static IP addresses or well-known port numbers, NBAR utilizes deep packet inspection to look inside the packet payload and identify application layer protocols. It achieves this by matching traffic against a Packet Description Language Module (PDLM), which acts as a database of application signatures, making it particularly effective for identifying peer-to-peer applications or protocols that negotiate ports dynamically. The most recent version, NBAR2, further expands these capabilities by recognizing a vast array of protocols, including those that do not use standard TCP or UDP ports. By accurately identifying specific data applications, NBAR allows administrators to implement precise QoS policies, such as marking or policing, ensuring that mission-critical applications receive the necessary network resources while managing lower-priority traffic."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "What is the correct command for configuring load balancing on an EtherChannel link?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Switch(config)# port-channel load-balance method",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Switch(config-if)# port-channel number load-balance method",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Switch(config)# channel-group number load-balance method",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Switch(config-if)# channel-group number load-balance method",
              "isCorrect": false
            }
          ],
          "topic": "Topic 6.5.0",
          "explanation": "EtherChannel performs load balancing by distributing traffic across the physical links within a bundle based on the results of a specific hashing algorithm. The correct command to configure this behavior is port-channel load-balance [method], which must be executed in global configuration mode because the selected method applies to all EtherChannels configured on the device. According to the sources, it is impossible to have different load-balancing methods for different EtherChannels on a single switch; therefore, any change to this setting affects every logical link simultaneously. Administrators can verify the available hashing options—such as source-MAC, destination-IP, or a combination of both—by using the context-sensitive help command port-channel load-balance ? to ensure the most efficient traffic distribution for their specific network environment."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "matching",
          "question": "Match the question with the task that involves QoS policies.",
          "chooseCount": 3,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Define classes of traffic",
              "answer": "Which traffic do we care about?"
            },
            {
              "id": "p2",
              "prompt": "Define QoS policies for classes",
              "answer": "What will be done to this traffic?"
            },
            {
              "id": "p3",
              "prompt": "Apply a service policy",
              "answer": "Where will this policy be implemented?"
            }
          ],
          "options": [],
          "topic": "Topic 7.5.1",
          "explanation": null
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "Which two of the following options correctly define the characteristics for EtherChannel? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "high bandwidth",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "load sharing across links",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "low convergence timing",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "server scalability",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "multiple logical ports for RSTP+",
              "isCorrect": false
            }
          ],
          "topic": "Topic 6.2.0",
          "explanation": "EtherChannel technology is specifically designed to aggregate multiple physical Ethernet links into a single logical link to overcome bandwidth limitations and provide redundancy. According to the sources, the primary characteristics of EtherChannel include providing high bandwidth by combining the capacity of up to eight physical ports and enabling load sharing across links to distribute traffic efficiently. This aggregation allows the Spanning Tree Protocol (STP) to treat the bundle as one logical port, which prevents loop-avoidance mechanisms from blocking redundant paths and ensures all physical links remain active. While EtherChannel does improve network resilience and allows for faster recovery if a single link fails, its core definitions in the technical documentation emphasize the increase in total throughput and the ability to balance traffic across the aggregated members. Therefore, high bandwidth and load sharing are the fundamental characteristics that define its operational purpose in a campus network."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "Which Cisco IOS router command would disable Cisco Express Forwarding on a specific interface?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "router(config)# no ip route-cache cef",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "router(config-if)# no ip cef",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "router(config)# no ip cef",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "router(config-if)# no ip route-cache cef",
              "isCorrect": true
            }
          ],
          "topic": "Topic 2.5.0",
          "explanation": "Cisco Express Forwarding (CEF) is the default and most efficient switching mechanism used by Cisco routers to forward packets at high speeds using hardware-based tables like the FIB and adjacency tables. While CEF is typically enabled globally on the device, it can be disabled on a specific interface by using the command no ip route-cache cef in interface configuration mode. This action is often taken during troubleshooting to force the router to use process switching for that specific interface, allowing the CPU to examine every packet individually, although this significantly degrades performance. It is important to note that while the provided sources describe the characteristics of CEF, fast switching (route caching), and process switching, the specific command syntax is based on general Cisco IOS knowledge and is not explicitly detailed in the provided excerpts."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "questionType": "choice",
          "question": "Which two options are IEEE variants of STP? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "MSTP",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "VRRP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "RSTP",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Rapid PVST+",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "PVST+",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.4.0",
          "explanation": "The Spanning Tree Protocol (STP) has evolved through several standards to provide loop-free redundancy, with RSTP and MSTP being the two primary variants defined by the IEEE. RSTP, or IEEE 802.1w, was developed to address the slow convergence of the original 802.1D standard, allowing network ports to transition to a forwarding state much faster. MSTP, or IEEE 802.1s, further enhances network efficiency by grouping multiple VLANs into a single spanning tree instance, which significantly reduces the processing load on the switch's CPU. In contrast, options such as PVST+ and Rapid PVST+ are Cisco-proprietary enhancements rather than standard IEEE variants, although they incorporate IEEE functionalities to provide per-VLAN spanning tree instances. VRRP is not a part of the spanning tree suite at all, as it is an open-standard protocol used for default gateway redundancy. Therefore, MSTP and RSTP are the only official IEEE standards among the choices provided."
        },
        {
          "id": 19,
          "originalNumber": 19,
          "questionType": "choice",
          "question": "What is the default aging time, in seconds, for entries in the MAC address table on a Cisco Catalyst switch?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "1200",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "150",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "600",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "60",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "300",
              "isCorrect": true
            }
          ],
          "topic": "Topic 3.4.2",
          "explanation": "The MAC address table, often referred to as the Content-Addressable Memory (CAM) table, is the primary database used by a switch to make Layer 2 forwarding decisions by mapping source MAC addresses to specific physical ports. To ensure that this table remains efficient and does not retain information for devices that have disconnected or moved, the switch implements an aging timer for all dynamically learned entries. By default, the aging time on a Cisco Catalyst switch is 300 seconds (5 minutes). If the switch does not receive a frame with a particular source MAC address within this five-minute window, the entry is automatically purged from the table to make room for new information. This value represents a balance between minimizing \"unknown unicast flooding\" and maintaining an accurate, up-to-date forwarding table. It is important to distinguish this from the \"Aging Time\" often seen in Spanning Tree Protocol (STP) outputs (such as 15 seconds), which is a shortened timer used only during topology changes to quickly clear stale network paths. While the specific value of 300 seconds is not explicitly stated in the provided excerpts, it is the standard operational default for Cisco Catalyst switches and was previously identified in our conversation history regarding MAC address table management."
        },
        {
          "id": 20,
          "originalNumber": 20,
          "questionType": "choice",
          "question": "Which layer should provide the highest switching speeds?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "none of the above",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "distribution",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "access",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "core",
              "isCorrect": true
            }
          ],
          "topic": "Topic 1.3.2",
          "explanation": "In the Cisco hierarchical network design model, the core layer serves as the high-speed backbone for the entire campus network, and its primary objective is to switch packets as fast as possible. To maintain these maximum switching speeds, the core is designed with simplicity in mind, avoiding complex policy-based tasks such as packet manipulation, filtering, or sophisticated QoS services that are typically handled at the distribution layer. By focusing on providing nonstop connectivity, high redundancy, and near-immediate data-flow recovery, the core ensures that large volumes of traffic aggregated from the access and distribution layers move efficiently across the network without introducing unnecessary latency. This specialized focus on pure performance and availability makes the core the layer that requires the highest switching capacities and the fastest convergence within the enterprise architecture."
        },
        {
          "id": 21,
          "originalNumber": 21,
          "questionType": "choice",
          "question": "Where is it best to deploy the root guard?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Only access ports.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Ports that connect to switches that are root bridge.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "All ports connecting switches.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Ports that connect to switches that should not be the root bridge.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 4.9.0",
          "explanation": "Root guard is a critical security feature used in Spanning Tree Protocol (STP) to prevent unauthorized or rogue switches from becoming the root bridge and disrupting the network hierarchy. It is best deployed toward ports that connect to switches that should not be the root bridge, as this allows administrators to strictly enforce the intended placement of the root bridge across the campus design. When a port with root guard enabled receives a superior BPDU—one indicating a better bridge ID than the current root—the switch ignores the BPDU and places the interface into a root-inconsistent state, effectively blocking all data traffic to prevent the topology from changing. This mechanism ensures that even if a network attacker or a misconfigured device attempts to claim the root role, the primary traffic paths remain stable and predictable, protecting the network from potential man-in-the-middle attacks or loop-induced downtime."
        },
        {
          "id": 22,
          "originalNumber": 22,
          "questionType": "choice",
          "question": "Which layer provides routing and implements policies (filtering, security, and QoS)?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "core",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "backbone",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "distribution",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "access",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.4.2",
          "explanation": "The distribution layer acts as the primary service and control boundary between the access layer and the core in a hierarchical network design. Unlike the core layer, which is focused strictly on high-speed switching, the distribution layer is where routing and packet manipulation are specifically performed. It serves as a demarcation point for implementing policy-based connectivity, including filtering tasks, security policies, and Quality of Service (QoS). By handling these complex functions—such as summarizing routes from the access layer and isolating network problems—the distribution layer ensures that the core remains simple and efficient while providing necessary control over traffic flows throughout the campus environment."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "questionType": "choice",
          "question": "Which command, when issued on a trunking interface, would set a VLAN that is not to be given an 802.1q tag?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SW2(config-if)# switchport trunk native vlan 99",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "SW2(config-if)# switchport trunk no-tagging vlan 99",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "SW2(config-if)# switchport native vlan 99",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SW2(config-if)# trunk native vlan 99",
              "isCorrect": false
            }
          ],
          "topic": "Topic 3.3.1",
          "explanation": "In the IEEE 802.1Q trunking protocol, all frames are typically assigned a 4-byte tag to identify their VLAN membership as they traverse a trunk link. However, there is a special designation known as the native VLAN. By default, frames belonging to the native VLAN are carried over the trunk link untagged (without an 802.1Q header).\n\nWhile the default native VLAN is VLAN 1, network administrators often change it to a different ID for security purposes. To configure a specific VLAN—such as VLAN 99—to be the native VLAN that is not given an 802.1Q tag, you must use the command switchport trunk native vlan 99 while in interface configuration mode. Once this is set, the switch will transmit traffic for VLAN 99 without a tag and expect to receive untagged traffic from the neighboring switch for that same VLAN. The other options provided do not follow the standard Cisco IOS command syntax."
        },
        {
          "id": 24,
          "originalNumber": 24,
          "questionType": "choice",
          "question": "Which option is a Layer 2 QoS marking?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "DSCP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "QoS group",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "EXP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "CoS",
              "isCorrect": true
            }
          ],
          "topic": "Topic 7.4.1",
          "explanation": "CoS (Class of Service) is the standard Layer 2 Quality of Service marking used with Ethernet frames. It consists of a 3-bit field located within the Layer 2 header, which provides eight different priority levels for traffic as it moves across a switched network. While CoS is used for wired Ethernet connections, a similar 3-bit field called TID (Traffic Identifier) is used for Layer 2 marking in wireless 802.11 MAC frames.\n\nIn contrast, other options like DSCP (Differentiated Services Code Point) are Layer 3 markings. DSCP utilizes a 6-bit value within the IPv4 Type of Service (ToS) field or the IPv6 Traffic Class field, providing more granular classification that carries end-to-end significance across routers. Because Layer 2 headers are often stripped and rewritten by routers, CoS markings are typically used to maintain priority only within a local broadcast domain or across trunk links before being mapped to Layer 3 markings for wider network transit."
        },
        {
          "id": 25,
          "originalNumber": 25,
          "questionType": "choice",
          "question": "Which table is used to make the decision on whether a frame should even be forwarded based on the frame being permitted in an ACL?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "CAM",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "MAC address table",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "IP Routing table",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "TCAM",
              "isCorrect": true
            }
          ],
          "topic": "Topic 2.2.1",
          "explanation": "The TCAM (Ternary Content-Addressable Memory) is the specific hardware table used to store Access Control Lists (ACLs), Quality of Service (QoS), and other information generally associated with upper-layer processing.\n\nWhen a switch receives a frame and must decide, \"Should it even forward the frame?\", it relies on the TCAM to identify the frame according to the configured ACLs. A single lookup in the TCAM is all that is required to determine whether a frame is permitted or denied.\n\nCisco switches are designed to perform CAM (Layer 2 forwarding) and TCAM (ACL/QoS) lookups in parallel. This hardware-based approach ensures that the switch can enforce security policies and filtering tasks at wire speed without any performance degradation. In contrast, the CAM table (or MAC address table) is primarily used for making Layer 2 forwarding decisions based on destination MAC addresses, not for enforcing ACL permit/deny logic."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "questionType": "choice",
          "question": "What cloud connectivity do organizations use to connect to a public cloud with a private connection?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Direct Connect",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Private Connect",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "MPLS Direct Connect",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cloud OnRamp",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.6.1\n\nD",
          "explanation": "irect Connect is a cloud connectivity option that allows an organization to use a private connection to connect to a public cloud. Historically, connecting to a public cloud was done via a public network, such as using a VPN tunnel through the internet; however, many major providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud now offer Direct Connect as a way to use a private network instead.\n\nThis method offers several distinct advantages over traditional internet-based connections:\n\n• Security: It provides an extra layer of security because the data is transferred over a private network rather than the public internet.\n\n• Reliability: Because the internet can be unpredictable and prone to failures, using a private connection gives an organization more control over the reliability mechanisms it implements.\n\n• Speed: Private connections typically allow for faster speeds than standard internet connections.\n\nWhile MPLS Direct Connect also involves private paths, it specifically refers to situations where an organization connects via an MPLS provider to a \"Direct Connect Partner\" to reach the cloud. Cloud OnRamp is a Cisco SD-WAN feature used to simplify and automate these connections rather than being the connection type itself."
        },
        {
          "id": 27,
          "originalNumber": 27,
          "questionType": "choice",
          "question": "Which inter-VLAN routing option uses a router with individual physical interfaces connected to a switchport configured as access ports in separate VLANs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "router on a stick",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Layer 3 switch",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "dynamic routing",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Traditional inter-VLAN routing",
              "isCorrect": true
            }
          ],
          "topic": "Topic 3.5.1",
          "explanation": "Traditional inter-VLAN routing (referred to in the sources as Option 1) is the method that requires multiple physical interfaces on both the router and the switch. In this setup, each individual router interface is connected to a specific switch port that has been associated with a single-data VLAN, which characterizes that port as an access port. Devices on these separate VLANs send traffic through the dedicated physical link to the router to reach other subnets.\n\nWhile this configuration facilitates the routing process in a multi-VLAN environment, it is not very scalable because the router can quickly run out of physical interfaces as more VLANs are added to the network. This is distinct from router on a stick, which uses a single physical interface configured as a trunk link to carry multiple VLANs via subinterfaces, or a Layer 3 switch, which uses internal virtual interfaces to route between VLANs at wire speed."
        },
        {
          "id": 28,
          "originalNumber": 28,
          "questionType": "choice",
          "question": "An end-user PC should be connected to which hierarchical layer?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "access",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "core",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "transport",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "distribution",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.4.1",
          "explanation": "The access layer is the specific tier in the hierarchical network design where end devices (such as PCs, printers, and cameras) attach to the wired portion of the campus network. Its primary purpose is to grant user access to network services and devices. Because it must accommodate a wide variety of connected devices and support services like Power over Ethernet (PoE), the access layer is considered one of the most feature-rich parts of the network.\n\nIn contrast, the distribution layer acts as a boundary for routing and policy enforcement, while the core layer serves as a high-speed backbone that is explicitly designed not to have any directly attached user connections."
        },
        {
          "id": 29,
          "originalNumber": 29,
          "questionType": "choice",
          "question": "Which command would set an interface to trunk mode?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "interface mode trunk",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "switchport trunk active",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "switchport trunk",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "switchport mode trunk",
              "isCorrect": true
            }
          ],
          "topic": "Topic 3.3.2",
          "explanation": "To configure a switch port to function as a trunk link, which allows it to carry traffic for multiple VLANs simultaneously, you must use the switchport mode trunk command while in interface configuration mode. This command manually overrides any dynamic negotiation and forces the port into trunking mode.\n\nOn many Cisco Catalyst switches, this command also activates the Dynamic Trunking Protocol (DTP) to manage the trunk negotiation with the connected device. Once the command is applied, you can verify the operational state of the port by using commands like show interfaces trunk or show interfaces switchport to ensure the \"Operational Mode\" has transitioned to trunk. In contrast, the other options provided—such as interface mode trunk or switchport trunk—do not match the standard Cisco IOS syntax for setting the administrative mode of an interface."
        },
        {
          "id": 30,
          "originalNumber": 30,
          "questionType": "choice",
          "question": "Which option is used to manage the automation of network device configuration?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco DNA Center",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Cisco SD-WAN",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco SD-Access",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cisco vBond",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.2.0",
          "explanation": "Cisco DNA Center is the centralized controller designed to automate network device configuration and management to help an organization achieve its specific intent. By using open APIs, it reduces operational complexity and allows for the very fast, lower-risk deployment of network devices and services through either a user interface or existing orchestration systems.\n\nWhile other technologies mentioned in the sources also involve automation, they have different focuses:\n\n• Cisco SD-Access uses automation specifically for orchestrating user and device policies (such as onboarding and segmentation) across a network fabric.\n\n• Cisco SD-WAN is a secure, cloud-based architecture managed through the Cisco vManage console to establish overlay fabrics between different sites.\n\n• Cisco DNA Center remains the primary solution for the overarching automation of the device configurations themselves within the Cisco Networking roadmap."
        },
        {
          "id": 31,
          "originalNumber": 31,
          "questionType": "choice",
          "question": "Which load-balancing option on a Cisco Catalyst switch will use MAC addresses for load-balancing?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "src-dst-port",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "src-dst-name",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "src-dst-ip",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "src-dst-mac",
              "isCorrect": true
            }
          ],
          "topic": "Topic 6.5.0",
          "explanation": "EtherChannel uses a hashing algorithm to distribute traffic across the physical links in a bundled group. The src-dst-mac option specifically utilizes both the source and destination MAC addresses of the incoming frames to calculate this hash value. By using both addresses, the switch can distribute traffic more effectively between different pairs of hosts, allowing packets sent from host A to host B and host A to host C to potentially use different physical ports in the channel. While the default load-balancing mode on many Cisco switches is often src-dst-ip, administrators can manually select src-dst-mac to ensure load distribution occurs at Layer 2. This is particularly useful in environments where a significant amount of non-IP traffic is present or when traffic needs to be balanced across a local segment based on hardware addresses. It is important to note that a single conversation between two specific devices will always be sent through the same physical link to maintain the proper order of frames."
        },
        {
          "id": 32,
          "originalNumber": 32,
          "questionType": "choice",
          "question": "Which type of RSTP link type is full duplex and assumes that the port is connected to a single device at the other end of the link?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "shared",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "serial",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "multilink",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "point-to-point",
              "isCorrect": true
            }
          ],
          "topic": "Topic 4.5.9",
          "explanation": "In Rapid Spanning Tree Protocol (RSTP), link types are used to categorize ports to determine how quickly they can transition to a forwarding state. The point-to-point link type is specifically used for ports operating in full-duplex mode. This link type assumes that the port is connected to only a single device (such as another switch) at the other end of the link.\n\nBecause there is only one other device on the segment, the switch can use a proposal-and-agreement handshake to allow the designated port to make a rapid transition to the forwarding state without waiting for traditional timer-based delays. While this link type is typically determined automatically based on the duplex setting of the interface, it can also be manually overwritten with a specific port configuration. In contrast, links that are not point-to-point are considered shared links (labeled as \"Shr\" in command outputs), which occur on half-duplex interfaces and do not support rapid transitions."
        },
        {
          "id": 33,
          "originalNumber": 33,
          "questionType": "choice",
          "question": "Which of these is the correct multicast address that VRRP uses to send advertisements?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "224.0.0.4",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "224.0.0.2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "224.0.0.16",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "224.0.0.18",
              "isCorrect": true
            }
          ],
          "topic": "Topic 5.6.1",
          "explanation": "The correct multicast address used by the Virtual Router Redundancy Protocol (VRRP) to send advertisements is 224.0.0.18.\n\nIn a VRRP configuration, the Master router sends periodic advertisements to this specific multicast address to communicate its status to the Backup routers. These advertisements are typically sent at a default Advertisement interval of 1.000 second. If the Backup routers fail to receive an advertisement within the Master Down interval, they assume the Master has failed and will initiate a transition to become the new Master router. This mechanism ensures transparent default gateway failover for host devices on the network."
        },
        {
          "id": 34,
          "originalNumber": 34,
          "questionType": "choice",
          "question": "How many layers are recommended in the hierarchical network design?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "3",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "4",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.3.2",
          "explanation": "The recommended Cisco hierarchical network design is a three-tier architecture consisting of the access, distribution, and core layers. This modular framework simplifies the tasks required for internetworking by allowing each layer to focus on specific functions:\n\n• Access Layer: Used to grant user access to network devices and end systems like PCs and printers.\n\n• Distribution Layer: Aggregates wiring closets, segments workgroups, and acts as a service and control boundary where routing, security policies, and QoS are implemented.\n\n• Core Layer: Serves as the high-speed backbone for the campus, designed to switch packets as fast as possible with high availability.\n\nWhile some smaller networks may use a \"collapsed core\" design with only two physical tiers, the fundamental hierarchical model is defined by these three functional layers."
        },
        {
          "id": 35,
          "originalNumber": 35,
          "questionType": "choice",
          "question": "Which command can be used to verify the status of HSRP on the Cisco IOS router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show interface hsrp",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show failover",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show standby",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "show standby router",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show hsrp",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.4.2",
          "explanation": "The primary command used to verify the status, state, and configuration of the Hot Standby Router Protocol (HSRP) on a Cisco IOS router is show standby. This command provides comprehensive information about HSRP groups, including the virtual IP address, the virtual MAC address, and the current HSRP state (such as Active, Standby, or Listen).\n\nIf a network administrator needs a condensed summary of all HSRP groups on the device, they can use the show standby brief command. This summary typically includes the interface, group number, priority, pre-emption status, local state, and the IP addresses of both the active and standby routers. Additionally, show standby is used to verify advanced HSRP features, such as interface and object tracking or configured authentication methods."
        },
        {
          "id": 36,
          "originalNumber": 36,
          "questionType": "choice",
          "question": "Which three features are properties and one-way requirements for voice traffic? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The required bandwidth is roughly between 30 and 128 kbps.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "The required bandwidth is roughly between 0.5 and 20 Mbps.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Latency should be below 400 ms.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Latency should be below 150 ms.",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Voice traffic is smooth.",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "Voice traffic is bursty.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.2.5",
          "explanation": "Voice traffic is smooth: According to the sources, voice traffic is categorized as real-time traffic that comprises constant and predictable bandwidth and packet arrival times. This \"predictable\" nature defines the traffic as smooth, as opposed to data traffic which is characterized as bursty and unpredictable.\n\nLatency should be below 150 ms: Voice is extremely time-critical. While the sources note that interactive video shares the same delay and jitter requirements as voice, they emphasize that timely delivery of data is crucial and that real-time applications do not retransmit lost data. To maintain the quality of a two-way conversation, the industry-standard one-way latency requirement is 150 ms or less. (Note: While snippet mentions a 150 ms switchover time for high availability, the 150 ms latency requirement for voice is a standard networking principle used to ensure transmission quality).\n\nRequired bandwidth (30–128 kbps): The sources mention that voice packets are generally small compared to video packets. Because voice uses constant bit-rate codecs, its bandwidth requirement is relatively low and stable, typically ranging between 30 and 128 kbps depending on the specific codec and header overhead used. By contrast, video traffic requires significantly higher bandwidth, often in the Mbps range."
        },
        {
          "id": 37,
          "originalNumber": 37,
          "questionType": "choice",
          "question": "Which two protocol choices do you have when you are implementing an EtherChannel bundle? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "LAPD",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "PAgP",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "LACP",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "PADP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "dot1Q",
              "isCorrect": false
            }
          ],
          "topic": "Topic 6.3",
          "explanation": "EtherChannel can be established using two main negotiation protocols that allow switches to automatically form a bundle by exchanging control packets:\n\n• LACP (Link Aggregation Control Protocol): This is part of an IEEE specification (802.3ad). Because it is a standard, it is used to facilitate EtherChannels in mixed-vendor environments. It ensures configuration consistency regarding speed, duplex settings, and VLAN information before bundling ports.\n\n• PAgP (Port Aggregation Protocol): This is a Cisco proprietary protocol, meaning it only works on Cisco devices. It provides negotiation benefits similar to LACP by identifying neighbors and comparing port capabilities to ensure they match before forming the logical link.\n\nWhile a third option exists—Static persistence (the \"on\" mode)—it is a manual configuration that does not use a negotiation protocol to exchange control packets. Other options provided, such as dot1Q, refer to IEEE 802.1Q, which is a protocol used for VLAN trunking and tagging rather than link aggregation."
        },
        {
          "id": 38,
          "originalNumber": 38,
          "questionType": "choice",
          "question": "Which option is a congestion avoidance mechanism?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "QPM",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "WRED",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "LFI",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "MRF",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.4.7",
          "explanation": "WRED (Weighted Random Early Detection) is a congestion avoidance mechanism that manages network resources by selectively dropping packets before a queue becomes completely full. While standard \"tail drop\" mechanisms only discard packets when a buffer is already overflowed, WRED monitors the buffer depth and performs early discards on random packets once a minimum defined threshold is exceeded.\n\nThis proactive dropping is primarily used to prevent TCP global synchronization, which occurs when multiple TCP senders simultaneously reduce their transmission rates due to a tail drop, leading to suboptimal bandwidth utilization. By using WRED, the switch can skew the randomness of these drops based on traffic weights, meaning more important traffic is less likely to be dropped than less important traffic during periods of congestion."
        },
        {
          "id": 39,
          "originalNumber": 39,
          "questionType": "choice",
          "question": "Which command can you use to verify the MST port cost for instance 1?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show spanning-tree1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show spanning tree cost1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show spanning-tree mst1",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "show spanning-tree mst instance1",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.7.6",
          "explanation": "To verify the configuration and operational status of a specific Multiple Spanning Tree (MST) instance, including the port cost and port priority, the correct command is show spanning-tree mst <instance-id>.\n\nIn MST, port parameters like cost are not global but are instead configured and maintained per instance. This allows different instances to have different path costs for the same physical interface, enabling load balancing across the network topology. When you issue the command show spanning-tree mst 1, the switch displays a table listing each interface's role, status, cost, and priority number specifically for MST instance 1.\n\nThe other options provided are incorrect because they do not follow the standard Cisco IOS syntax for MST verification:\n\n• show spanning-tree 1 would typically refer to a specific VLAN in a PVST+ environment.\n\n• The keywords \"cost\" and \"instance\" are not used as standalone arguments in the basic verification command in the manner suggested by the other options."
        },
        {
          "id": 40,
          "originalNumber": 40,
          "questionType": "choice",
          "question": "Which option is the protocol that will prevent a bridging loop if BPDUs are received on an interface that has the STP calculation disabled?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RSTP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "BPDU guard",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "PortFast",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "MST",
              "isCorrect": false
            }
          ],
          "topic": "Topic 4.8.0",
          "explanation": "BPDU guard is a Cisco enhancement used to prevent bridging loops on ports where traditional Spanning Tree Protocol (STP) calculations have been effectively bypassed using PortFast.\n\nWhen PortFast is enabled on an access port, the port transitions immediately from blocking to forwarding, skipping the standard listening and learning states to allow end devices to connect quickly. Because these ports are intended only for end-user devices (like PCs or printers) that do not send BPDUs, receiving a BPDU on such an interface would indicate that another switch or bridge has been connected. If left unchecked, this could create a catastrophic bridging loop.\n\nBPDU guard protects the network by monitoring these interfaces; if it detects an incoming BPDU, it immediately shuts down the port and places it into an errdisable state. This ensures that the STP domain borders are enforced and the network topology remains predictable and loop-free."
        },
        {
          "id": 41,
          "originalNumber": 41,
          "questionType": "choice",
          "question": "Which option is the default priority for VRRP?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "110",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "255",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "100",
              "isCorrect": true
            }
          ],
          "topic": "Topic 5.6.1",
          "explanation": "The default priority for a router participating in Virtual Router Redundancy Protocol (VRRP) is 100. This priority value is used during the election process to determine which device will function as the Master router for the group.\n\nKey details regarding VRRP priority include:\n\n• Master Election: The router with the highest priority is elected as the Master. If priorities are equal, the router with the highest IP address becomes the Master.\n\n• Manual Configuration: Administrators can manually set the priority to a higher value (such as 110) to ensure a specific router becomes the Master for deterministic network behavior.\n\n• IP Address Owner: If a router's actual physical IP address is used as the virtual IP address for the group, that router will automatically become the Master, and priorities are ignored in the election process.\n\n• Verification: The current priority and state of a VRRP group can be verified using the show vrrp or show vrrp brief commands."
        },
        {
          "id": 42,
          "originalNumber": 42,
          "questionType": "choice",
          "question": "How many bits constitute the DSCP field of the IP header?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "6 bits",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "8 bits",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "3 bits",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "4 bits",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.4.1",
          "explanation": "The Differentiated Services Code Point (DSCP) is a Layer 3 marking mechanism that utilizes a 6-bit value within the IPv4 Type of Service (ToS) field or the IPv6 Traffic Class field.\n\nHistorically, the ToS field used a 3-bit marking known as IP Precedence, which only allowed for eight different priority levels. The transition to the 6-bit DSCP field was implemented to provide more granular classification for modern network traffic while maintaining backward compatibility with the original IP Precedence standards. By using 6 bits, DSCP allows for up to 64 different traffic classes, enabling network administrators to more precisely manage Quality of Service (QoS) for various types of data, voice, and video traffic."
        },
        {
          "id": 43,
          "originalNumber": 43,
          "questionType": "choice",
          "question": "Which two commands could be issued on R1 to verify the HSRP group, priority, and state of a Cisco IOS router? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show hsrp brief",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show standby",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "show standby detail",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show standby brief",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "show hsrp",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.4.7",
          "explanation": "To verify the configuration and operational status of the Hot Standby Router Protocol (HSRP) on a Cisco IOS router, the following two commands are primarily used:\n\n• show standby: This command provides a detailed look at the HSRP status. It displays the HSRP group number, the current state (such as Active or Standby), the virtual IP and MAC addresses, and the priority of the router. It also includes information on timers and whether pre-emption is enabled.\n\n• show standby brief: This command offers a condensed, tabular summary of the HSRP information. It is highly useful for quickly verifying the Group, Priority, State, and the IP addresses of the Active and Standby routers for all HSRP-enabled interfaces on the device.\n\nThe other options provided, such as show hsrp or show hsrp brief, do not follow the standard Cisco IOS syntax for HSRP verification as described in the sources. While \"show standby detail\" exists in some Cisco software versions, the sources specifically highlight show standby and its brief counterpart as the primary verification tools."
        },
        {
          "id": 44,
          "originalNumber": 44,
          "questionType": "choice",
          "question": "Which feature can be used to optimize the traffic path for a specific application?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RSTP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "PBR",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "uRPF",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "OSPF",
              "isCorrect": false
            }
          ],
          "topic": "Topic 6.8.0",
          "explanation": "Policy-based routing (PBR) is a feature that allows you to selectively route traffic based on specific criteria or policies instead of relying solely on traditional destination-based routing protocols. It provides a flexible tool for network administrators to implement user-defined policies that direct packets to take different paths across an internetwork.\n\nBy using route maps to match incoming packets, PBR can override the default routing table to forward traffic based on factors like the source IP address. This is particularly useful in complex environments where specific traffic paths must be chosen due to legal, contractual, or political constraints, or simply to optimize the path based on network needs. In contrast, protocols like OSPF focus on traditional destination-based path selection, while RSTP is used for Layer 2 loop prevention."
        },
        {
          "id": 45,
          "originalNumber": 45,
          "questionType": "choice",
          "question": "In HSRP, what are two possible states for the routers? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Standby",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Active",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Subordinate",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Primary",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "Backup",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.4.2",
          "explanation": "The Hot Standby Router Protocol (HSRP) is designed to provide redundancy for a default gateway by allowing a group of routers to emulate a single virtual router. Within an HSRP group, two primary operational roles are assigned:\n\n• Active Router: This router is responsible for forwarding packets sent to the virtual IP address and responding to ARP requests with the virtual MAC address. It periodically sends hello messages to inform other routers of its status.\n\n• Standby Router: This router's main function is to monitor the operational status of the HSRP group. It listens for hello messages from the active router and is prepared to quickly assume packet-forwarding responsibility if the active router fails.\n\nWhile an HSRP group can contain more than two routers, only one can be Active and one can be Standby at any given time; any additional routers in the group remain in a Listen state. Note that \"Backup\" and \"Master\" are the terms used for similar roles in the VRRP protocol, rather than HSRP."
        },
        {
          "id": 46,
          "originalNumber": 46,
          "questionType": "choice",
          "question": "Which command will allow you to verify that Cisco Express Forwarding is enabled on interface GigabitEthernet 0/0?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show interface cef GigabitEthernet 0/0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show ip interface GigabitEthernet 0/0 cef",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show ip interface cef",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show ip interface GigabitEthernet 0/0",
              "isCorrect": true
            }
          ],
          "topic": "Topic 2.6.0",
          "explanation": "Cisco Express Forwarding (CEF) is defined in the sources as the fastest switching mechanism and the default mode for Cisco devices. It operates by separating the control plane, which builds the forwarding tables in software, from the data plane, which forwards traffic using hardware. CEF relies on two primary hardware-based tables: the Forwarding Information Base (FIB), which contains destination prefixes, and the adjacency table, which stores Layer 2 next-hop and header rewrite information.\n\nTo verify that CEF is enabled and functioning on a specific interface, the command show ip interface [interface-id] is used. This command provides a comprehensive report of the IP configuration and status for the interface, including a specific line indicating whether IP CEF switching is enabled."
        },
        {
          "id": 47,
          "originalNumber": 47,
          "questionType": "choice",
          "question": "Which statement about network core design is true?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "A collapsed core is a preferred design in big company networks.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The core layer is not needed unless you have IP telephony.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "A dedicated core layer allows the campus to more easily accommodate growth.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "A collapsed core is preferred to a design where the distribution layer is moved down to the access layer.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.4.4",
          "explanation": "The core layer serves as the high-speed backbone for campus connectivity and acts as the aggregation point for all other layers and modules. According to the sources, having a dedicated core layer allows the campus to accommodate growth without compromising the design of the distribution blocks, the data center, or the rest of the network. This dedicated layer provides the capacity and scaling capability necessary as the number of distribution blocks, geographical area, or complexity of the campus increases.\n\nIn contrast, a collapsed core design—where core and distribution functions are combined into a single physical switch—is typically used in smaller campuses rather than large enterprise networks. Without a separate core layer, distribution switches would need to be fully meshed, a design that is difficult to scale because it requires a significant increase in cabling and routing complexity for each new building or module added to the network. Therefore, while a collapsed core is efficient for smaller sites, a dedicated core is preferred for its ability to provide scalability and minimize risks during network moves, additions, and changes."
        },
        {
          "id": 48,
          "originalNumber": 48,
          "questionType": "choice",
          "question": "From configuration mode, which command sequence would create VLAN 20 and name the VLAN Voice?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SW1(config)# vlan 20 name Voice",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "SW1(config)# vlan name Voice SW1(config)# vlan number 20",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "SW1(config)# vlan name Voice number 20",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "SW1(config)# vlan 20 SW1(config-vlan)# name Voice",
              "isCorrect": true
            }
          ],
          "topic": "Topic 3.2.0",
          "explanation": "To create a VLAN and assign it a name on a Cisco Catalyst switch, you must use a two-step command sequence starting from global configuration mode. First, you enter the vlan [vlan-id] command, which creates the VLAN in the database and moves the session into VLAN configuration mode (indicated by the (config-vlan)# prompt). Second, while in this sub-mode, you use the name [vlan-name] command to assign the descriptive label.\n\nIn your example:\n\n• SW1(config)# vlan 20 creates the VLAN entry.\n\n• SW1(config-vlan)# name Voice assigns the name \"Voice\" to it.\n\nCreating a VLAN other than the factory default (VLAN 1) causes the switch to update the vlan.dat file, which is stored in flash memory. If you do not manually specify a name, the switch automatically assigns a default name such as VLAN0020."
        },
        {
          "id": 49,
          "originalNumber": 49,
          "questionType": "choice",
          "question": "Which layer supports convergence for voice, wireless, and data?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "distribution",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "access",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "none of the above",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "core",
              "isCorrect": false
            }
          ],
          "topic": "Topic 1.4.1",
          "explanation": "The access layer is the specific functional area of the network where end devices, such as PCs, printers, and cameras, attach to the wired campus infrastructure. It supports the convergence of different communication services by serving as the primary connection point for IP phones (voice) and wireless access points (wireless). To facilitate this convergence, the access layer provides essential technologies like Power over Ethernet (PoE) and perpetual power to ensure voice and wireless devices remain operational during reboots. Because it must handle such a wide variety of device types and service requirements, the access layer is defined as one of the most feature-rich parts of the campus network. In modern designs like SD-Access, this layer also helps automate policy for any application across the unified wireless and wired network fabric."
        },
        {
          "id": 50,
          "originalNumber": 50,
          "questionType": "choice",
          "question": "Which command would allow you to see all interfaces that are configured in trunk mode and the VLANs that are allowed on those trunk ports?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show vlan detail",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show vlan interfaces",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show vlan brief",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show interfaces trunk",
              "isCorrect": true
            }
          ],
          "topic": "Topic 3.3.2",
          "explanation": "To verify the configuration and status of trunk ports on a switch, the sources specify that you should use the show interfaces trunk command. This command is essential because it provides a detailed summary of all interfaces currently operating in trunking mode, including their administrative and operational status, encapsulation type (such as 802.1q), and the native VLAN assigned to the port.\n\nMost importantly, the output of show interfaces trunk explicitly lists the VLANs allowed on trunk, as well as the VLANs that are currently active and not pruned by the Spanning Tree Protocol. While other commands like show vlan brief are useful for seeing which access ports are assigned to specific VLANs, they do not provide the detailed trunking parameters and allowed-list information that show interfaces trunk offers. Another useful command for individual port verification is show interfaces [interface-id] switchport, which shows whether a port is operationally a trunk and its allowed VLANs, but show interfaces trunk provides a more efficient global view of all trunking links."
        },
        {
          "id": 51,
          "originalNumber": 51,
          "questionType": "choice",
          "question": "Which of these is an FHRP that Cisco designed to allow multiple active forwarders to load-balance outgoing traffic?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "VRRP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "GLBP",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "OSPF",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "EIGRP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "HSRP",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.3.0",
          "explanation": "The Gateway Load Balancing Protocol (GLBP) is a Cisco-proprietary First Hop Redundancy Protocol (FHRP) specifically designed to overcome the limitations of older protocols like HSRP and VRRP. While HSRP and VRRP provide redundancy by having multiple routers act as a single virtual gateway, they typically only allow one router to actively forward traffic while others remain in a standby or backup state.\n\nGLBP, however, allows for multiple active forwarders to share the load of outgoing traffic from the LAN. It accomplishes this by balancing the host load across multiple uplinks, which provides significantly better bandwidth utilization and scalability at the distribution layer. In contrast, OSPF and EIGRP are Interior Gateway Protocols (IGPs) used for dynamic routing between routers, rather than providing default gateway redundancy for end hosts."
        },
        {
          "id": 52,
          "originalNumber": 52,
          "questionType": "choice",
          "question": "Which two actions on a Cisco router are functions of the control layer between the routing protocol and the firmware data plane microcode? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "collecting the data plane information, such as traffic statistics, from the interface module to the route processor",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "allowing management access",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "managing the internal data and control circuits for the packet-forwarding and control functions",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "forwarding data packets",
              "isCorrect": false
            }
          ],
          "topic": "Topic 2.4.0",
          "explanation": "In Cisco Layer 3 devices, the control plane and data plane operate independently to ensure efficient processing and forwarding. The control plane (running on the route processor) manages routing protocols and builds the forwarding logic, while the data plane (utilizing interface modules and switching fabric) is responsible for moving the actual data packets.\n\nAccording to the sources, specific actions define the interaction between the control plane (where routing protocols reside) and the firmware data plane microcode:\n\n• Managing internal circuits: The system must manage the internal data and control circuits required for both packet-forwarding and control functions.\n\n• Collecting statistics: The control plane collects information from the data plane, such as traffic statistics, moving this data from the interface module to the route processor for monitoring and analysis.\n\n• Conveying information: It extracts routing and forwarding-related control information from protocols and configuration data to convey it to the interface modules.\n\nIn contrast, forwarding data packets is a dedicated function of the data plane hardware and microcode, not a function of the control layer interaction. While management access (like SSH or Telnet) is a control plane function, it is not specifically categorized in the sources as an interaction between the routing protocols and the forwarding microcode."
        },
        {
          "id": 53,
          "originalNumber": 53,
          "questionType": "choice",
          "question": "Which two commands would set the authentication method for VRRP on an interface to use the key string Cisco123 (one command for MD5 authentication and one command for plaintext authentication)? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "vrrp 1 authentication md5 key-string Cisco123",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "vrrp authentication md5 key Cisco123",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "vrrp 1 authentication text Cisco123",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "vrrp 1 authentication plaintext key-string Cisco123",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "vrrp authentication key-string Cisco123",
              "isCorrect": false
            }
          ],
          "topic": "Topic 5.6.3\n\nA",
          "explanation": "ccording to the sources, while modern VRRP standards (RFC 3768 and RFC 5798) removed authentication support, Cisco IOS devices still support plaintext and MD5 authentication mechanisms originally specified in RFC 2338.\n\nThe specific command syntax required to implement these on an interface is as follows:\n\n• Plaintext Authentication: The command used is vrrp [group-number] authentication text [key-string].\n\n• MD5 Authentication: The command used is vrrp [group-number] authentication md5 key-string [key-string].\n\nIn both cases, the group number (1 in this example) must be specified to associate the authentication method with the correct VRRP group on the interface. MD5 is generally the preferred method because it computes a hash on a portion of each message, ensuring that hash keys are never actually exchanged over the network."
        },
        {
          "id": 54,
          "originalNumber": 54,
          "questionType": "choice",
          "question": "Which Cisco switching mechanism requires a Cisco router to process all packets in the CPU?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "process switching",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "circuit switching",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco Express Forwarding",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "fast switching",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "pass-through switching",
              "isCorrect": false
            }
          ],
          "topic": "Topic 2.5.0",
          "explanation": "Process switching is the slowest switching mechanism because every packet is examined by the CPU and all forwarding decisions are made in software. For every individual frame, the router must use its CPU to strip the Layer 2 header, look up the Layer 3 destination in the routing table, and rewrite the Layer 2 header. Due to this high demand on the processor, it is considered the most CPU-intensive method and is typically used only as a last resort or for troubleshooting.\n\nIn contrast, other mechanisms are more efficient:\n\n• Fast switching only requires the CPU to examine the first packet in a flow to create a cache for subsequent packets.\n\n• Cisco Express Forwarding (CEF) is the fastest method and is less CPU-intensive because it uses hardware-based tables (FIB and adjacency tables) to switch all packets in a flow, including the first one, without needing to involve the CPU for each frame."
        },
        {
          "id": 55,
          "originalNumber": 55,
          "questionType": "choice",
          "question": "Which of these is a VLAN that exists in the VLAN database and cannot be deleted?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "default VLAN 1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Native VLAN 99",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Voice VLAN 20",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "default VLAN 99",
              "isCorrect": false
            }
          ],
          "topic": "Topic 3.2.0\n\nA",
          "explanation": "ccording to the sources, when a Cisco Catalyst switch is first powered on, certain VLANs are automatically created in the VLAN database (stored as the vlan.dat file in flash memory). These include VLAN 1, which is the factory default VLAN, as well as VLANs 1002 through 1005, which are reserved for Token Ring and FDDI.\n\nThe sources explicitly state that these specific VLAN IDs (1 and 1002 to 1005) cannot be removed from the database. While other VLANs like a Native VLAN 99 or a Voice VLAN 20 can be manually created and deleted by an administrator using the vlan or no vlan commands, VLAN 1 must always exist as it is the default membership for all ports until they are reassigned."
        },
        {
          "id": 56,
          "originalNumber": 56,
          "questionType": "choice",
          "question": "Which option is the default switching mode and uses information from tables that are built by the CPU, such as the routing table and the ARP table, to build hardware-based tables that are known as the FIB and adjacency tables?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "process switching",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "program-layered switching",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco Express Forwarding",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "fast switching",
              "isCorrect": false
            }
          ],
          "topic": "Topic 2.5.0",
          "explanation": "Cisco Express Forwarding (CEF) is identified as the default switching mode for Cisco routers. It is a topology-based switching mechanism that is significantly less CPU-intensive than process or fast switching because it pre-builds forwarding information before traffic actually arrives.\n\nCEF functions by taking information from control plane tables built by the CPU—specifically the IP routing table and the ARP table—to construct two specialized hardware-based tables:\n\n• Forwarding Information Base (FIB): Derived from the IP routing table, the FIB contains a mirrored set of the routing information and is optimized for fast destination lookups.\n\n• Adjacency Table: Derived from the ARP table, this table stores the Layer 2 next-hop addresses and pre-computed frame header rewrite information for all entries in the FIB.\n\nBy using these tables, CEF allows the data plane to make hardware-based forwarding decisions for every packet in a data flow, including the very first packet, without needing to involve the CPU for a software lookup."
        },
        {
          "id": 57,
          "originalNumber": 57,
          "questionType": "choice",
          "question": "Which two of the following are LACP EtherChannel modes? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "on",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "passive",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "desirable",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "off",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "active",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "auto",
              "isCorrect": false
            }
          ],
          "topic": "Topic 6.3.1",
          "explanation": "The Link Aggregation Control Protocol (LACP) is an IEEE standard (802.3ad) that facilitates the automatic bundling of physical ports into a single logical EtherChannel. LACP operates using two specific modes: active and passive. In active mode, the switch port unconditionally initiates negotiations by sending LACP packets to the connected peer. In passive mode, the port does not initiate negotiation but instead waits for LACP requests and responds to them if a compatible device is detected.\n\nIn contrast, other modes mentioned belong to different mechanisms:\n\n• desirable and auto are the operational modes for PAgP (Port Aggregation Protocol), which is a Cisco proprietary protocol.\n\n• The on mode is used for static manual configuration, where the EtherChannel is forced to form without the use of any negotiation protocol like LACP or PAgP."
        },
        {
          "id": 58,
          "originalNumber": 58,
          "questionType": "choice",
          "question": "Which QoS mechanism will drop traffic if a session uses more than the allotted bandwidth?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "policing",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "shaping",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "marking",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "congestion management",
              "isCorrect": false
            }
          ],
          "topic": "Topic 7.4.4",
          "explanation": "Policing is a Quality of Service (QoS) mechanism designed to monitor traffic sessions and ensure they do not exceed their allotted bandwidth. When a session violates the configured rate, a policer typically takes one of two actions: it either drops the excess traffic or re-marks it to a different class of service, usually one with a higher drop probability.\n\nIn contrast, shaping is a traffic-smoothing tool that does not drop traffic. Instead, it uses buffering to delay and smooth out traffic spikes so the session never exceeds the contracted rate. Furthermore, congestion management (queuing) is used to avoid dropping packets by temporarily storing them in buffers until network resources become available. Because policing makes instantaneous decisions to drop packets rather than delaying them, it is often preferred at the ingress (entry) point of a network to save bandwidth and CPU cycles."
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
    },
    "ccnp-encor-v9-security": {
      "id": "ccnp-encor-v9-security",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 14 – 16",
      "title": "Checkpoint Exam : Network Security (Modules 14 – 16)",
      "description": "Examen Checkpoint officiel sur la sécurité réseau (ACLs, CoPP, AAA, RADIUS/TACACS+, 802.1X, WebAuth, Firewalls) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-14-16-checkpoint-exam-network-security-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 28,
      "passingScorePercent": 70,
      "totalQuestions": 28,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "What happens when a user first connects to a network in a WebAuth scenario?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Their first HTTP or HTTPS request is redirected to a guest authentication portal.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "They are only allowed to access internet web pages.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "They are only allowed to access internal web pages.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "They are denied access until they authenticate via 802.1X.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.18.1",
          "explanation": "When a user first connects to a network using Web Authentication (WebAuth), they are initially granted limited access through an initial authorization assignment. This stage is designed to restrict almost all traffic except for that required for the authentication process itself.\n\nWhen the user attempts to browse to any HTTP or HTTPS DNS-resolvable website, the Network Access Device (NAD) intercepts that specific request. Instead of reaching the intended destination, the user is automatically redirected to a Guest User Login portal or authentication web page. Once the user successfully provides credentials and authenticates through this portal, they are assigned a new authorization profile that permits appropriate access to enterprise resources.\n\nThis method is often used as a method of last resort for guests or users who do not have a functional 802.1X supplicant or lack an account in the primary identity store."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "What makes a firewall a Cisco Secure Firewall?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "It has additional features such as Context Awareness and Advanced Malware Protection.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "It has the ability to contain an attack within the security zone where the attack occurred.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It has the ability to handle protocols that use dynamically negotiated connections.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "When used as a primary path between client and server, it can prevent the server from seeing the connection from the client.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.12.1",
          "explanation": "Cisco Secure Firewall (formerly known as Cisco Next Generation Firewall or NGFW) evolves beyond traditional perimeter security to defend against modern multivector and persistent threats. What makes it a \"Secure Firewall\" is the integration of several advanced security services:\n\n• Context Awareness: This feature allows the firewall to identify who is connecting, what device they are using, their location, and the timing of the connection to enforce granular security policies.\n\n• Advanced Malware Protection (AMP): It provides comprehensive capabilities for detecting, blocking, tracking, and remediating malware.\n\n• Application Visibility and Control: Unlike standard firewalls that look at port numbers, this feature recognizes specific applications by analyzing data streams.\n\n• URL Filtering: This integrates proxy-like functions directly into the firewall, utilizing website reputation scores and classification to control web traffic.\n\n• Intrusion Prevention System (IPS): Deep packet inspection is integrated directly into the appliance to identify and block suspicious behavior.\n\nWhile standard firewalls are designed to contain attacks within a security zone, the Cisco Secure Firewall specifically utilizes these integrated functions to offer comprehensive network visibility and highly effective threat protection."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Refer to the exhibit. Which two statements are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R# show policy-map control-plane"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "The F0-IN policy is applied to the data plane.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "30 packets have conformed to the TCP-C policing rate.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Access list 150 is used to classify CoPP traffic.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "A total of 1137 packets have been rate limited by the CoPP policy.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "A total of 120 packets matched the TCP-C class map.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 14.9.2",
          "explanation": "The provided options can be verified using the logic of Control Plane Policing (CoPP) and the output of the show policy-map control-plane command:\n\n• Control Plane vs. Data Plane: The command show policy-map control-plane is specifically used to verify the status of activity on the control plane. CoPP treats the control plane as a separate entity to protect the route processor from being overwhelmed by traffic. Therefore, any policy shown in this output is applied to the control plane, not the data plane.\n\n• Traffic Classification: In the Modular QoS CLI (MQC) framework used by CoPP, class maps are used to categorize traffic, often by referencing an Access Control List (ACL). The output line Match: access-group [Number/Name] explicitly identifies which ACL is being used to classify the packets for that specific class. If the exhibit shows \"Match: access-group 150,\" then ACL 150 is the classification tool.\n\n• Packet Match Counts: When viewing the output for a specific class-map, the first line of statistics (e.g., 120 packets, 7200 bytes) indicates the total number of packets that have matched that class since the counters were last cleared.\n\n• Policing Actions: The police section of the output further breaks down these matches into conformed (packets within the rate limit) and exceeded (packets over the limit). \"Rate limited\" typically refers to the exceeded packets that were dropped by the policy.\n\nBased on the sources, identifying the ACL used for matching and the total packets matched are the standard ways to interpret this verification command."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "Which three statements about firewalls are true? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "A firewall can prevent undesired access to a network security zone.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Firewalls typically provide protection between and within network security zones.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "A firewall can introduce a performance bottleneck.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "A firewall can act as an accelerator for business-critical data.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "If a system in a security zone is compromised, a firewall can help to contain the attack within that zone.",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "Modern firewalls provide a complete network security solution.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.12.0",
          "explanation": "Firewalls are essential components of network security designed to enforce access control policies between different security domains. Their primary functions and limitations include:\n\n• Access Control and Prevention: The fundamental job of a firewall is to classify traffic and decide what to forward or deny based on configured security policies. This allows them to prevent undesirable or unauthorized access to protected network security zones.\n\n• Attack Containment: Similar to architectural firewalls in buildings, network firewalls are intended to contain damage. If a system within a specific zone is compromised, the firewall acts as a barrier to prevent the attack from spreading to other security zones.\n\n• Performance Impact: Because firewalls are placed at critical transit points between zones and must inspect all passing traffic, they can introduce performance bottlenecks. It is necessary to size a firewall appropriately for the traffic volume it is expected to handle.\n\nIt is important to note that modern firewalls are not a complete security solution; they are merely one component of a larger security architecture. Additionally, they typically only provide protection between zones, as they generally cannot control traffic moving within the same security zone."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which description is not a feature of CoPP?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "uses MQC for configuration",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "rate-limits access to the control plane",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "easily managed compared with infrastructure ACLs",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "applies to a virtual interface tied to the control plane",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "permits or denies access to the data plane",
              "isCorrect": true
            }
          ],
          "topic": "Topic 14.9.0",
          "explanation": "Control Plane Policing (CoPP) is a security feature specifically designed to protect a device’s route processor (CPU) from being overwhelmed by traffic directed at the device itself. Based on the sources, its features include:\n\n• MQC Configuration: CoPP utilizes the Modular QoS CLI (MQC) framework, which involves defining class maps to categorize traffic and policy maps to define actions.\n\n• Rate-Limiting: It allows administrators to rate-limit or filter traffic to prevent low-priority or malicious floods from exhausting system resources.\n\n• Virtual Interface Application: The policy is applied to the control plane virtual interface in the inbound direction rather than on physical interfaces.\n\n• Management Advantage: CoPP is easier to manage than infrastructure ACLs because it is applied once to the control plane entity, whereas traditional ACLs must be applied to every individual physical interface, which can be an \"onerous task\".\n\nThe statement that CoPP permits or denies access to the data plane is incorrect because CoPP only manages traffic destined for the control plane; data plane packets (user-generated traffic forwarded to other end-stations) are handled in the \"fast path\" and are not the target of CoPP policies."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "Refer to the exhibit. This ACL is applied on traffic outbound from the router on the interface that directly connects to the 10.0.70.5 server. A request for information from a secure web page is sent from host 10.0.55.23 and is destined for the 10.0.70.5 server. Which line of the access list will cause the router to take action (forward the packet onward or drop the packet)?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "access-list 100 permit tcp host 10.0.55.23 host 10.0.70.55 eq 1719\naccess-list 100 permit tcp host 10.0.55.23 host 10.0.70.55 eq 1720\naccess-list 100 deny tcp any any eq 443\naccess-list 100 deny tcp any any eq www\naccess-list 100 permit ip any any"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "2",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "4",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "3",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "1",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.3.2",
          "explanation": "To determine which line of the Access Control List (ACL) will cause the router to take action, you must analyze the traffic characteristics against the ACL entries in order from top to bottom:\n\n• Identify the Traffic: The request is for a secure web page, which uses the HTTPS protocol. This corresponds to TCP port 443. The source is 10.0.55.23 and the destination is 10.0.70.5.\n\n• Evaluate Line 1: access-list 100 permit tcp host 10.0.55.23 host 10.0.70.55 eq 1719. This is not a match because the destination host specified (10.0.70.55) does not match the actual destination (10.0.70.5), and the port (1719) does not match HTTPS (443).\n\n• Evaluate Line 2: access-list 100 permit tcp host 10.0.55.23 host 10.0.70.55 eq 1720. Similar to Line 1, this is not a match due to the incorrect destination IP and port.\n\n• Evaluate Line 3: access-list 100 deny tcp any any eq 443. This statement matches any source and any destination for TCP port 443. Since the secure web request is destined for port 443, this line is a match.\n\nBecause ACLs are processed sequentially and stop at the first match, the router will take action on Line 3 and deny (drop) the packet."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which option is not a typical use of ACLs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "VPN traffic identification",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "NAT control",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "PPP configuration",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "route advertisement filtering",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.1.0\n\nA",
          "explanation": "ccess Control Lists (ACLs) are primarily packet classification tools rather than protocol configuration mechanisms. According to the sources, they are typically used to define interesting traffic for a VPN, filter route advertisements, and control traffic for services like NAT. While an ACL can be applied to a PPP interface to filter data, it is not a \"typical use\" for configuring the underlying parameters or properties of the PPP protocol itself."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "choice",
          "question": "Which command should be used to configure a vty line to use the aaaservers authentication method list?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "authentication aaaservers",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "line authentication aaaservers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "login authentication aaaserver",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "authentication method aaaservers",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.8.0",
          "explanation": "To configure a vty line to use a specifically named AAA authentication method list, you must use the login authentication command followed by the name of the list.\n\nWhile a default method list is automatically applied to all lines and interfaces, any named method list must be explicitly applied in line configuration mode to take effect. Once this command is issued on a vty line (e.g., line vty 0 4), the named list overrides the default authentication settings for that specific line. This architectural framework allows administrators to enforce different security policies for different access methods, such as requiring a more secure server group for remote network access while maintaining a local backup for physical console access."
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "choice",
          "question": "If a user needs to be in privileged EXEC or enable mode, which part of AAA must succeed?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "authentication",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "accounting",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "administration",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "authorization",
              "isCorrect": true
            }
          ],
          "topic": "Topic 16.10.0",
          "explanation": "While authentication is the process of identifying a user, authorization is the component of the AAA framework that determines the level of access a user has and what they are permitted to do. Specifically, authorization allows an administrator to define which privileged EXEC commands are available to a user.\n\nWhen a user attempts to access a specific service or enter a mode like privileged EXEC (enable) mode, the device queries the authorization server. The server can then return a specific privilege level (such as level 15) for the user, granting them the permission required to operate in that mode. It is important to note that while authorization requires a successful authentication to proceed, it is the authorization step that specifically validates the user's right to access privileged modes."
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which three types of traffic is the router service plane responsible for processing? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "MPLS VPN",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Telnet",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "BGP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "QoS",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "ICMP",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "GRE",
              "isCorrect": true
            }
          ],
          "topic": "Topic 14.8.0",
          "explanation": "The services plane is responsible for a special category of traffic known as \"high-touch\" packets. These are user-generated data plane packets that, while being forwarded to other end-station devices, require processing beyond standard destination IP address-based forwarding. According to the sources, specific examples of services plane functions include:\n\n• Generic Routing Encapsulation (GRE)\n\n• Quality of Service (QoS)\n\n• Multiprotocol Label Switching (MPLS) VPNs\n\n• SSL/IPsec encryption and decryption\n\nOther types of traffic mentioned in your list belong to different planes: BGP is a control plane protocol used for network creation and operation; Telnet is a management plane protocol used to manage the device; and ICMP is generally treated as a \"receive\" or \"exception\" packet that must be handled by the device's route processor."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "A RADIUS server is located at IP address 192.168.102.101. Which command configures a Cisco router to find the server?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "radius server 192.168.102.101",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "aaa radius 192.168.102.101",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "authentication radius 192.168.102.101",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "address ipv4 192.168.102.101",
              "isCorrect": true
            }
          ],
          "topic": "Topic 16.8.0",
          "explanation": "Configuring a RADIUS server on a Cisco router involves a two-step process using a named server object:\n\n• First, you enter global configuration mode and create a named configuration for the server using the command radius server [configuration-name].\n\n• Once inside the radius server configuration mode, you use the address ipv4 [hostname or IP] command to tell the router the actual location (IP address) of the server.\n\nThis specific command also allows for the optional configuration of the authentication port (default 1812) and accounting port (default 1813) on the same line. While the radius server command initiates the configuration object, the address ipv4 command is what explicitly tells the router where to \"find\" the server on the network."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "Refer to the exhibit. Based on the named extended ACLs configured, the line matching port 443 refers to which protocol?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "R1(config)# ip access-list extended SURFING\nR1(config-ext-nacl)# permit tcp 192.168.0.0 0.0.0.255 any eq 80\nR1(config-ext-nacl)# permit tcp 192.168.0.0 0.0.0.255 any eq 443\nR1(config-ext-nacl)# exit\nR1(config)# ip access-list extender BROWSING\nR1(config-ext-nacl)# permit tcp any 192.168.10.0 0.0.0.255 established\nR1(config-ext-nacl)# exit"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "HTTP",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "FTP",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "HTTPS",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "SNTP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "POP3",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.6.2",
          "explanation": "Extended Access Control Lists (ACLs) provide granular control by allowing administrators to filter traffic based on Layer 4 protocols and port numbers. When configuring these ACLs, Cisco IOS allows the use of either a well-known port number or its corresponding application name.\n\nAccording to the sources, port 443 is the standard port used for HTTPS (Hypertext Transfer Protocol Secure). In the provided exhibit, the ACL named SURFING is configured to permit traffic from the 192.168.0.0/24 subnet to any destination if the traffic matches specific web protocols:\n\n• Port 80 refers to HTTP (often displayed as the keyword www).\n\n• Port 443 refers to HTTPS.\n\nOther protocols mentioned in the options use different ports: FTP typically uses port 21, and Telnet uses port 23. Thus, the line matching port 443 specifically targets secure web traffic."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which type of AAA message does the TACACS+ shared secret key use for encryption between the client and server?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "authentication messages only",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "authorization messages only",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "accounting messages only",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "all messages",
              "isCorrect": true
            }
          ],
          "topic": "Topic 16.6.0",
          "explanation": "The TACACS+ protocol is designed for total separation of the three AAA functions and provides superior security compared to RADIUS. According to the sources, while RADIUS only encrypts the password portion of a packet, the entire TACACS+ packet is encrypted. This means that the shared secret key is used to encrypt all traffic—including authentication, authorization, and accounting messages—ensuring that communication between the Network Access Server (NAS) and the TACACS+ server is completely secure."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "Refer to the exhibit. How will Telnet packets from host 10.1.1.1 be treated by the configured CoPP policy?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "!\nclass-map telnet-class     \n    match access-group 100\n!\npolicy-map telnet-policy     \n   class telnet-class       \n     police 80000 conform transmit exceed drop\n! \ncontrol-plane     \n   service-policy input telnet-policy\n!\naccess-list 100 deny tcp host 10.1.1.1 any eq telnet   \n  access-list 100 deny tcp host 10.1.1.2 any eq telnet   \n  access-list 100 permit tcp any any eq telnet"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "Telnet packets from host 10.1.1.1 will be dropped by the CoPP policy.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Telnet packets from host 10.1.1.1 will be permitted without policing.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Telnet packets from host 10.1.1.1 will be dropped at the inbound interface.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Telnet packets from host 10.1.1.1 will be policed to 8 kbps.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.10.2",
          "explanation": "The behavior of Control Plane Policing (CoPP) depends on how traffic is classified within the Modular QoS CLI (MQC) framework. In this scenario, the class-map telnet-class uses access-list 100 to identify traffic for policing.\n\nIn the context of CoPP classification, a \"deny\" statement in the referenced ACL does not mean the packet is dropped at the interface; instead, it means the packet is excluded from that specific class. According to the sources, when a packet matches a \"deny\" statement in the ACL, it will still be forwarded to the control plane, but it will not be policed by the actions defined in that class map.\n\nBecause the first line of access-list 100 is deny tcp host 10.1.1.1 any eq telnet, Telnet traffic from host 10.1.1.1 is explicitly excluded from the telnet-class. Consequently, these packets bypass the police 80000 command and are granted unfettered access to the device’s control plane. This configuration is typically used to ensure that trusted hosts are never restricted by rate-limiting during high-traffic events or potential attacks."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "choice",
          "question": "What are two deployment modes for VPNs? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "AES",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "remote access",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "SHA-256",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "site-to-site",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "multihop",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.4.0",
          "explanation": "Virtual Private Networks (VPNs) are classified based on specific criteria, one of which is the deployment mode. The two primary deployment models are site-to-site VPN and remote-access VPN.\n\nA site-to-site VPN provides an internet-based WAN infrastructure designed to connect branch offices, home offices, or business partner sites to all or portions of a central network. Conversely, a remote-access VPN is designed to provide secure communications for individual remote hosts to access networks and applications. These remote connections are typically established through the use of VPN client software or an SSL-enabled web browser.\n\nIt is important to distinguish these modes from other technical components mentioned in the options: AES and SHA-256 are cryptographic algorithms used for encryption and data integrity within a VPN, while \"multihop\" is not listed as a standard deployment category in these materials."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "Which command is used to activate an IPv4 ACL named SALES on an interface so that the router filters traffic prior to it accessing the routing table?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "ipv4 access-class SALES out",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "ip access-class SALES in",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "ipv4 access-group SALES out",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "ip access-group SALES in",
              "isCorrect": true
            }
          ],
          "topic": "Topic 14.4.0",
          "explanation": "To filter traffic before it reaches the routing table, you must apply the ACL in the inbound direction using the ip access-group command. According to the sources, an inbound ACL processes incoming packets before they are routed to an outbound interface. This is considered efficient because it saves the router the overhead of performing a routing lookup if the packet is destined to be discarded by the ACL anyway.\n\nIf the ACL were applied in the outbound direction (using the out keyword), the router would first have to route the packet to the outbound interface before checking it against the ACL. Additionally, the command access-class is specifically used for controlling access to vty lines rather than physical interfaces. Therefore, ip access-group SALES in is the correct command to achieve pre-routing filtering for a named IPv4 ACL on an interface."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "What is the major difference between named ACLs and dACLs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "dACLs are configured on Cisco ISE; named ACLs can be configured on Cisco ISE or locally on the WLC.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "dACLs can be configured locally on the WLC or on Cisco ISE; named ACLs are configured locally on the WLC.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "dACLs are configured on Cisco ISE; named ACLs are configured locally on the WLC.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "dACLs are configured locally on the WLC; named ACLs are configured on Cisco ISE.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 15.16.5",
          "explanation": "The major difference between these two types of access control lists lies in where they are defined and how they are delivered to the network device:\n\n• Downloadable ACLs (dACLs): These are configured centrally on Cisco ISE. During the authentication and authorization process, the entire ACL is \"pushed down\" or downloaded from the RADIUS server to the switch. The switch then applies these attributes to the specific port for the duration of the user session.\n\n• Named ACLs: These are primarily used for wireless users and are configured locally on the Wireless LAN Controller (WLC). In this scenario, Cisco ISE does not send the actual ACL content; instead, it simply informs the WLC which locally stored ACL name should be applied to that specific user session.\n\nWhile both provide differentiated access based on user identity, dACLs are dynamic and centralized, whereas named ACLs rely on pre-existing local configurations on the network access device."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "questionType": "choice",
          "question": "Which benefit of AAA is best described by the ability to track outdated user credentials across multiple network devices?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "redundancy",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "scalability",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "standardization",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "flexibility",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.4.0",
          "explanation": "Scalability is the benefit of AAA that specifically addresses the challenges of managing user credentials across a growing network. According to the sources, while a local database might work for a small number of users on a single device, managing many users across multiple network devices becomes highly impractical, error-prone, and an administrative burden as the network expands.\n\nWithout a centralized AAA model, outdated credentials or the lack of individual accounts often leads to multiple administrators sharing a single username, which results in the loss of the ability to track activities back to a specific individual. Centralizing these services on a TACACS+ or RADIUS server provides the necessary manageability and control to ensure that credentials remain current and user actions remain accountable across the entire infrastructure."
        },
        {
          "id": 19,
          "originalNumber": 19,
          "questionType": "choice",
          "question": "Which two devices are considered endpoints? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "mobile devices",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "firewalls",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "switches",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "routers",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "laptops",
              "isCorrect": true
            }
          ],
          "topic": "Topic 15.7.0\n\nAn",
          "explanation": "endpoint is a device where data resides and represents a critical point where security must be enforced because the potential for damage there is great. The term \"endpoint security\" specifically refers to the protection of these devices, which include laptops, mobile devices (such as smartphones and tablets), desktop computers, and printers.\n\nIn contrast, devices like firewalls, switches, and routers are typically classified as network infrastructure or Network Access Devices (NADs). Their role is to act as policy enforcement points or authenticators that control the flow of traffic between different security zones rather than serving as the end destination or origin for user data."
        },
        {
          "id": 20,
          "originalNumber": 20,
          "questionType": "choice",
          "question": "Which option is a limitation of TACACS+?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "does not offer multiprotocol support",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "is only supported on Cisco routers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "has a slower response time than RADIUS",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "does not support mutual authentication",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.6.0",
          "explanation": "The difference in response time between the two protocols is primarily due to the underlying transport layer protocols they utilize. According to the sources, TACACS+ uses TCP (port 49), which is a connection-oriented protocol. Conversely, RADIUS uses UDP (port 1812 for authentication/authorization and port 1813 for accounting), which is a connectionless protocol.\n\nBecause TCP requires a three-way handshake to establish a connection before any AAA data can be exchanged, it inherently introduces more overhead and latency. This makes the overall process for TACACS+ slower than the lower-overhead, connectionless communication provided by RADIUS.\n\nAdditionally, while TACACS+ is a Cisco proprietary protocol, the option stating it is \"only supported on Cisco routers\" is technically inaccurate because the sources confirm it is also supported on other network access devices such as switches, firewalls, and access points. Therefore, the slower response time caused by TCP overhead is the most accurate technical limitation among the choices."
        },
        {
          "id": 21,
          "originalNumber": 21,
          "questionType": "choice",
          "question": "When applying an ACL to a router interface, which traffic is designated as outbound?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Traffic that is coming from the source IP address into the router.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Traffic that is leaving the router and going toward the destination host.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Traffic for which the router can find no routing table entry.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Traffic that is going from the destination IP address into the router.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.4.0",
          "explanation": "The designation of traffic as \"inbound\" or \"outbound\" is determined by the direction it flows relative to a specific router interface:\n\n• Outbound ACLs: These process traffic that is leaving the router through an interface and traveling toward its destination. When a packet is designated as outbound, the router has already performed a routing lookup to determine the correct exit interface; the packet is only then tested against the outbound ACL before being forwarded.\n\n• Inbound ACLs: These process incoming packets that are entering the router through an interface before they are routed to an outbound interface. This is considered more efficient because it prevents the router from wasting resources on a routing lookup for a packet that will ultimately be denied.\n\nTherefore, outbound traffic is specifically the data stream that has been successfully routed and is now exiting the device's interface toward the destination host."
        },
        {
          "id": 22,
          "originalNumber": 22,
          "questionType": "choice",
          "question": "What is the role of the router or switch in the AAA architecture?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "authentication server",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "supplicant",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "NAS",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "RADIUS entry point",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.6.0",
          "explanation": "In the AAA (Authentication, Authorization, and Accounting) architectural framework, the router or switch functions as the Network Access Server (NAS), also known as the client or RADIUS client. According to the sources, the role of the NAS includes:\n\n• Point of Contact: It is the device that users or machines contact first to gain access to a protected resource, such as the network or the device CLI.\n\n• Intermediary/Proxy: The NAS acts as a proxy between the supplicant (the endpoint requesting access) and the authentication server (the central server, like Cisco ISE, that validates credentials).\n\n• Protocol Translator: It communicates with the endpoint using 802.1X/EAP and then encapsulates that information into RADIUS or TACACS+ messages to communicate with the AAA server.\n\n• Policy Enforcement: After the authentication server validates the user's identity and notifies the NAS of the authorization status, the NAS allows or denies the user access to the network based on that response.\n\nWhile the supplicant is the software service on the endpoint and the authentication server is the central authority, the router or switch serves as the essential NAS that enforces security at the access edge."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "questionType": "choice",
          "question": "Which command would produce the following output?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "Router#\n10 permit 192.168.1.0 0.0.0.7\n20 permit 192.168.1.64 0.0.0.63 (4 match(es))\n30 deny any (8 match(es))"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "show access-lists",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "clear access-list counters",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show run | section access-list",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "no access-list 1",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.7.1",
          "explanation": "The output provided is characteristic of the show access-lists command. According to the sources, this command is used to display all configured access control lists (ACLs) on a router along with their hit counters. These hit counters, shown in the output as \"(4 match(es))\" or \"(8 match(es))\", indicate the number of packets that have matched a specific access control entry (ACE) since the counters were last cleared.\n\nThe other options are incorrect for the following reasons:\n\n• clear access-list counters: This command is used to reset the hit counters to zero for tuning purposes, rather than displaying them.\n\n• show run | section access-list: This command displays the ACL configuration as it exists in the running configuration file, but it does not show dynamic operational data like hit counters.\n\n• no access-list 1: This is a configuration command used to delete an entire numbered ACL rather than display its status."
        },
        {
          "id": 24,
          "originalNumber": 24,
          "questionType": "choice",
          "question": "Which AAA function does not depend on the other two functions?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "accounting",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "authorization",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "authentication",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "All functions depend on each other.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.3.0",
          "explanation": "In the AAA (Authentication, Authorization, and Accounting) architectural framework, authentication is the only function that can be valid without the other two. It is the initial process of identifying a user by comparing provided credentials against a database.\n\nAccording to the sources, while authentication can stand alone, authorization and accounting are dependent functions that cannot be performed unless authentication has been successfully completed first. Authorization requires a known identity to determine the specific level of access or commands allowed, and accounting requires that same identity to accurately track resource consumption and user activity. Therefore, authentication acts as the foundational requirement for the rest of the AAA model."
        },
        {
          "id": 25,
          "originalNumber": 25,
          "questionType": "choice",
          "question": "Which two number ranges are used to identify extended ACLs? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "100 - 199",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "2000 - 2699",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "1 - 99",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "1300 – 1999",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "101 - 200",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "1 - 100",
              "isCorrect": false
            }
          ],
          "topic": "Topic 14.2.0",
          "explanation": "Cisco IOS uses specific number ranges to distinguish between different types of Access Control Lists (ACLs). Numbered extended IPv4 ACLs are identified by the range 100 to 199. For larger configurations, an expanded range of 2000 to 2699 is also reserved for extended ACLs.\n\nThese specific ranges instruct the router to accept extended ACL statements, which allow for more granular filtering by testing source and destination addresses, protocols, and port numbers. In contrast, the ranges 1 to 99 and 1300 to 1999 are reserved exclusively for standard IPv4 ACLs."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "questionType": "choice",
          "question": "What are the three types of authentication options available in networks today? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "hashing",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "VPNs",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "credentials",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "certificates",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "biometrics",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "encryption",
              "isCorrect": false
            }
          ],
          "topic": "Topic 16.5.0\n\nA",
          "explanation": "uthentication is the foundational process of identifying a user before they are granted access to protected network resources. According to the sources, modern network authentication is generally based on three distinct categories:\n\n• Something a user knows: This involves the use of credentials, specifically username and password combinations.\n\n• Something a user has: This refers to digital certificates issued by a trusted certification authority.\n\n• Something a user is: This utilizes biometrics, such as scanners that identify individuals by their fingerprints or eye retina.\n\nWhile options like hashing and encryption are critical security mechanisms used to protect authentication data or ensure confidentiality, they are not categorized as the primary types of authentication options themselves."
        },
        {
          "id": 27,
          "originalNumber": 27,
          "questionType": "choice",
          "question": "Which two statements about phishing are correct? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Phishing is a common social engineering technique.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Phishing is not usually common in social media, but more for marketing and advertising.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Phishing email is usually a legitimate email sent from a large, legitimate organization.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The goal is to provide the consumer with legitimate choices for products and services.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "The goal is to get the victim to enter personal information.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 15.2.1",
          "explanation": "Phishing is a widespread technique categorized under social engineering, which involves manipulating people into performing specific actions or divulging confidential data.\n\nA typical phishing attack uses an email that pretends to be from a large, legitimate organization. Because these organizations are well-known, the victim is more likely to trust the message and visit a malicious website that closely resembles the official one. The ultimate goal of this deception is to trick the victim into entering personal information, such as account numbers, social security numbers, usernames, or passwords. Unlike legitimate marketing or advertising, phishing is entirely malicious and designed for data theft rather than providing consumer choices."
        },
        {
          "id": 28,
          "originalNumber": 28,
          "questionType": "choice",
          "question": "Which device typically serves as a network access server?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "router",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "switch",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "firewall",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "access point",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "all of the above",
              "isCorrect": true
            }
          ],
          "topic": "Topic 16.6.0",
          "explanation": "In the AAA architectural framework, the Network Access Server (NAS)—also known as the client—is the device that users or machines contact to gain access to a protected resource, such as a network or a device CLI. According to the sources, a NAS is typically a router, switch, firewall, or access point. These devices act as intermediaries (proxies) that communicate with an authentication server, such as Cisco ISE, using RADIUS or TACACS+ protocols to verify identity information and enforce authorization status."
        }
      ]
    },
    "ccnp-encor-v9-virtualization": {
      "id": "ccnp-encor-v9-virtualization",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 17 – 20",
      "title": "Checkpoint Exam : Virtualization & Network Services (Modules 17 – 20)",
      "description": "Examen Checkpoint officiel sur la virtualisation et les services réseau (Hyperviseurs, VRF, GRE, IPsec, NTP, SNMP, Syslog, NetFlow, IP SLA, EEM) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-17-20-checkpoint-exam-virtualization-and-network-services-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 30,
      "passingScorePercent": 70,
      "totalQuestions": 30,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "Which three statements about site-to-site VPNs are true? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "They eliminate the need for QoS.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "They provide transmission security between sites over an untrusted network.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "They support only Cisco routers.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "They often encounter problems with traffic filtering.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "They authenticate VPN peers and network devices that provide VPN functionality for an entire site.",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "They can be used as replacements for classic routed WANs.",
              "isCorrect": true
            },
            {
              "id": "g",
              "text": "They eliminate the need for basic network traffic controls.",
              "isCorrect": false
            },
            {
              "id": "h",
              "text": "They eliminate the need for high availability.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.1.0",
          "explanation": "Site-to-site VPNs are primarily used by enterprises to connect geographically dispersed sites or partners over public networks, often serving as a cost-effective replacement for classic routed WANs. These VPNs serve several critical security and operational roles:\n\n• Transmission Security: They provide security for data traveling over untrusted networks like the Internet or an MPLS WAN.\n\n• Authentication: They authenticate both the VPN peers and the network devices that manage VPN functionality for the entire site."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "Which show command filter skips the output up to the first occurrence of the regular expression pattern?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "begin",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "section",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "exclude",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "include",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.6.3",
          "explanation": "The begin filter is specifically designed to allow a user to skip all output of a show command down to the first occurrence of a specified regular expression pattern. For instance, if you want to see only the line configuration in a long running configuration, using show running-config | begin line vty will skip all preceding text and start the output at the first instance of the \"line vty\" keyword.\n\nOther filters mentioned in the sources serve different purposes:\n\n• exclude is used to omit lines containing a specific keyword from the output.\n\n• include is used to display only the lines that contain the specified keyword.\n\n• section is used to display entire configuration sections (such as a specific routing protocol) that match a keyword."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Assume the far-end device is correctly configured. Which command is missing from having a complete IP SLA ICMP Echo configuration after pasting it into the CLI of the device?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [
            {
              "type": "cli",
              "title": "Cisco CLI",
              "content": "[MISSING COMMAND] \n  icmp-echo 192.168.22.22 \nip sla schedule 33 life forever start-time now"
            }
          ],
          "options": [
            {
              "id": "a",
              "text": "ip sla 33",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "ip sla 1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "router sla 1",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "interface ethernet 0/0",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.9.1",
          "explanation": "To successfully configure an IP SLA, you must first enter the IP SLA configuration mode by defining a unique operation number in global configuration mode. In your provided snippet, the scheduling command specifically references operation 33 (ip sla schedule 33...), meaning the missing command must be ip sla 33 to create that specific instance. Without this initial command, the device would not be in the correct sub-mode to accept the subsequent icmp-echo configuration."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "What is the purpose of the SNMP trap message?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "It traps an agent into performing a device reboot.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "It performs a write to a MIB variable on the agent.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "It transmits an unsolicited condition from agent to manager.",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Trap is not an SNMP message.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.6.0",
          "explanation": "The purpose of an SNMP trap is to provide a mechanism for a managed device (the SNMP agent) to send unsolicited notifications to the network management system (the SNMP manager).\n\nUnlike standard SNMP polling, where the manager periodically queries the agent for data, traps are event-based. They provide almost real-time notifications when specific conditions occur, such as a change in device status or when a pre-configured performance threshold has been reached. This allows administrators to be alerted to irregular events, such as device unavailability or increased traffic, without waiting for the next scheduled poll."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which command can be used to verify that IPsec tunnels are established and to display the number of encrypted and decrypted packets for individual connections?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "show crypto map",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "show crypto sockets",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "show crypto pki",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "show crypto isakmp sa detail",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "show crypto ipsec sa detail",
              "isCorrect": true
            }
          ],
          "topic": "Topic 18.8.2",
          "explanation": "The show crypto ipsec sa command (and its detailed version) is the primary tool used to verify the status of IPsec Security Associations (SAs) and monitor data-plane activity. According to the sources, this command provides comprehensive information for individual connections, including the local and remote crypto endpoints, the current outbound and inbound SPIs, and the specific transform sets being utilized.\n\nCrucially, it displays real-time statistics for traffic passing through the tunnel, specifically showing the number of packets that have been encapsulated, encrypted, decapsulated, and decrypted. In the provided configuration examples, this command is used to confirm that a tunnel is operational by observing these counters increase after a successful ping.\n\nWhile show crypto isakmp sa is also a vital verification command, the sources specify that it is used to validate the status of IKE peering (Phase 1) rather than the packet-level encryption statistics of the IPsec tunnel itself."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "Which portion of the show interface command output indicates a congested interface?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "output queue drops",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "input errors",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "output errors",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "input queue drops",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.5.0",
          "explanation": "Output queue drops are specifically designated as being a result of a congested link. This occurs when the volume of traffic attempting to exit an interface exceeds the capacity of that link, causing the output buffer to overflow.\n\nIn contrast, the other indicators mentioned in the output of the show interface command signify different issues:\n\n• Input queue drops: These indicate that the router is receiving more traffic than it can actually process internally.\n\n• Input errors: These typically point to physical interface problems, CRC errors, or duplex mismatches.\n\n• Output errors: These are usually related to duplex issues on the connection."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which character in the output of a traceroute operation indicates that a packet is dropped because of a configured packet filter?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "\"U\"",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "\"I\"",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "\"A\"",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "\"H\"",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.7.4",
          "explanation": "In a Cisco traceroute operation, specific characters are used to diagnose where a packet flow is being interrupted. The character \"A\" stands for \"Administratively Prohibited,\" indicating that the packet was dropped because of a configured packet filter, such as an Access Control List (ACL).\n\nWhile the provided sources explain the underlying mechanism of traceroute—sending UDP datagrams with increasing TTL values until an ICMP \"port unreachable\" is received—and demonstrate the use of the asterisk (*) to indicate a timeout, they do not explicitly list the full table of response codes in the current excerpts. However, in standard Cisco network diagnostics:\n\n• A: Indicates the packet was blocked by an administrative filter (ACL).\n\n• H: Indicates the Host is unreachable.\n\n• U: Indicates a Port unreachable message was received, which typically signals that the packet successfully reached the destination host.\n\n• I: Indicates the operation was interrupted by the user."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "choice",
          "question": "Which hypervisor is used with almost all collaboration applications?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Sun xVM Server",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "VirtualBox",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Xen",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "VMware ESXi (vSphere)",
              "isCorrect": true
            }
          ],
          "topic": "Topic 17.2.2",
          "explanation": "VMware ESXi (vSphere) is the hypervisor used with almost all collaboration applications. It is a software package consisting of a lightweight operating system and additional software designed to create and manage virtual environments.\n\nCisco Unified Communications applications began supporting virtualization with VMware ESXi 4.0, and most current versions of collaboration applications require at least ESXi version 5.0. While other hypervisors exist, the sources explicitly note that applications such as Microsoft Hyper-V, Citrix Zen (Xen), and Red Hat KVM are not currently supported for these specific collaboration workloads. The hypervisor acts as an abstraction layer between the physical hardware and the virtual machines, managing resources like CPU cores, memory, and networking to ensure that multiple independent operating systems can run simultaneously on a single physical server."
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "choice",
          "question": "Which network topology is in use when every network has a direct VPN connection to every other network? This topology provides any-to-any communication and provides the most optimal direct path for network traffic.",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "individual point-to-point VPN connection",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "partially meshed network",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "star topology network",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "hub-and-spoke network",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "fully meshed network",
              "isCorrect": true
            }
          ],
          "topic": "Topic 18.2.0",
          "explanation": "In a fully meshed network, every network device is connected directly to every other network device. According to the sources, this specific topology is characterized by its ability to enable any-to-any communication, providing the most optimal and direct paths for network traffic. Because each site has a direct connection to all others, it offers the greatest flexibility to network users.\n\nOther topologies mentioned in the sources do not meet these criteria:\n\n• Hub-and-spoke: Relies on a central hub, and while the hub can facilitate spoke-to-spoke communication, it is not a direct any-to-any path for all nodes.\n\n• Partial mesh: Only some devices are organized in a full mesh, while others use hub-and-spoke or point-to-point connections.\n\n• Individual point-to-point: Only interconnects two specific sites using a secure path."
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which command do you use if you want to control the severity of the event that determines when a syslog should be sent?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "logging {hostname | ip address}",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "logging level severity",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "logging trap severity",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "logging severity",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.4.2",
          "explanation": "The logging trap command is used in global configuration mode to limit the syslog messages sent to a remote server based on their severity level. There are eight levels of severity (0 to 7), ranging from \"emergency\" to \"debug\".\n\nWhen a specific severity level is configured with this command, the device will forward all messages at that specified level and any level more severe. For example, if you set the threshold to \"informational\" (level 6), the router will forward all messages from severity 0 through 6 to the syslog server. This mechanism allows network administrators to control the volume of log data transmitted over the network and focus on the most critical events."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "Which option is the stronger hash algorithm used by IKE?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SHA-1",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "DH group 2",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "MD5",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "DH group 5",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.7.1",
          "explanation": "SHA-1 is a stronger hash algorithm than MD5. While even newer and more secure hash algorithms exist (such as SHA-256, SHA-384, and SHA-512), SHA-1 is explicitly preferred over MD5 in IKE policies to ensure better security.\n\nIt is important to note that DH group 2 and DH group 5 are not hash algorithms; rather, they are Diffie-Hellman groups used to determine the strength of the encryption-key-determination algorithm. While DH group 5 is stronger than DH group 2, they serve a different function in the IKE policy than hashing."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "What is the command sequence to configure a GRE tunnel interface on a Cisco IOS router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "R4(config)# interface tunnel0 R4(config-if)# ip address 172.16.99.2 255.255.255.0 R4(config-if)# tunnel source GigabitEthernet 0/0",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "R4(config)# interface tunnel0 R4(config-if)# ip address 172.16.99.2 255.255.255.0 R4(config-if)# tunnel source interface GigabitEthernet 0/0 R4(config-if)# tunnel destination 10.10.1.1",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "R4(config)# interface tunnel0 R4(config-if)# ip address 172.16.99.2 255.255.255.0 R4(config-if)# tunnel source 10.10.3.2 R4(config-if)# tunnel destination 10.10.1.1",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "R4(config)# interface tunnel0 R4(config-if)# tunnel source 10.10.3.2 R4(config-if)# tunnel destination 10.10.1.1",
              "isCorrect": false
            }
          ],
          "topic": "Topic 17.8.2\n\nA",
          "explanation": "minimum Generic Routing Encapsulation (GRE) tunnel configuration requires three core components: a tunnel interface with its own IP subnet, a tunnel source address, and a tunnel destination address.\n\nThe configuration sequence involves the following steps:\n\n• Create the interface: Enter interface configuration mode using the interface tunnel command followed by an ID number.\n\n• Assign an IP address: Configure an IP address and subnet mask for the tunnel interface to provide connectivity across the logical link.\n\n• Define the source: Specify the local IP address (or physical interface) that will serve as the origin for the encapsulated packets.\n\n• Define the destination: Specify the IP address of the remote peer where the tunnel will terminate.\n\nThe sources emphasize that the tunnel source and destination must be symmetrical and reachable between the two routers for the line protocol to come \"up\". In the specific example for router R4, the source is its own physical interface (10.10.3.2) and the destination is the far-end router R1 (10.10.1.1)."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which portion of the show interface command output indicates that a router received the information faster than the information could be processed by the router?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "input errors",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "output errors",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "input queue drops",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "output queue drops",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.5.0",
          "explanation": "Input queue drops in the show interface command output signify that traffic is being discarded because the router is receiving more traffic than it can process. This indicates an internal processing bottleneck where the CPU or switching logic cannot keep up with the rate of incoming packets.\n\nIn contrast, the other counters in the output indicate different types of network issues:\n\n• Output queue drops: These are typically caused by a congested link, where the egress traffic exceeds the bandwidth of the physical interface.\n\n• Input errors: These generally result from physical layer problems, such as CRC errors, duplex mismatches, or interface hardware issues.\n\n• Output errors: These are usually specifically related to duplex issues on the local connection."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "What Cisco IOS XE command configures the domain value on the PTP?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "ptp transport ipv4 udp",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "ptp vlan",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "ptp mode",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "ptp domain",
              "isCorrect": true
            }
          ],
          "topic": "Topic 19.3.4",
          "explanation": "The ptp domain command is used in global configuration mode to define the domain value for the Precision Time Protocol (PTP). A PTP domain represents a logical grouping of clocks that synchronize with each other, allowing multiple independent clock distribution systems to share the same physical network medium.\n\nBy default, the PTP domain is set to 0, but the ptp domain command allows administrators to configure a specific value, typically within a range of 4 to 127. Other commands listed serve different functions: ptp mode selects the clock synchronization role (e.g., boundary or transparent), ptp vlan identifies the specific VLAN for PTP traffic on trunk ports, and ptp transport ipv4 udp specifies the Layer 3 transport method."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "choice",
          "question": "Which three components must be defined on the local device to implement NetFlow on an interface when you configure Flexible NetFlow? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "NetFlow security",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "NetFlow admin",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "NetFlow monitor",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "NetFlow client",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "NetFlow record",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "NetFlow export",
              "isCorrect": true
            }
          ],
          "topic": "Topic 19.8.1",
          "explanation": "Configuring Flexible NetFlow on a Cisco device involves a specific four-step process that requires defining three core components on the local device before applying them to an interface. These components are:\n\n• NetFlow record: This defines the \"fingerprint\" of the traffic. It consists of key fields (configured with match commands) to identify unique flows and non-key fields (configured with collect commands) to gather additional statistics for analysis.\n\n• NetFlow export (Flow Exporter): This component specifies the destination for the captured data. It defines the IP address of the Flow Collector (the server), the transport protocol (typically UDP), and the specific port number used for the export.\n\n• NetFlow monitor: This functions as the NetFlow database in the device's memory (cache). Its primary purpose is to bind the flow record and the flow exporter together so the device knows what data to collect and where to send it.\n\nOnce these three elements are established, the NetFlow monitor is applied to a Layer 3-enabled interface (usually for input monitoring) to start the actual flow capture."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "Which two headers are added to an existing packet by GRE? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "16-byte GRE header",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "16-byte IP header",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "4-byte CMD header",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "4-byte GRE header",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "20-byte IP header",
              "isCorrect": true
            }
          ],
          "topic": "Topic 17.7.0",
          "explanation": "Generic Routing Encapsulation (GRE) creates a tunnel by adding two specific headers to the original packet. These include a 20-byte IP header, also known as the Delivery Header, which handles the transport of the packet across the network. Additionally, a 4-byte GRE header is added, which contains a protocol type field to identify the Layer 3 protocol being transported. Together, these headers result in a minimum of 24 bytes of additional overhead, effectively hiding the original packet headers from transit routers."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "Which Cisco IOS feature allows you to create your own event definition for a network device and specify the action that should be performed in response to that event?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "NetFlow",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "EEM",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "SNMP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "syslog",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.9.0",
          "explanation": "Cisco IOS Embedded Event Manager (EEM) is a powerful and flexible subsystem designed specifically to automate tasks and customize the behavior of a device. Unlike standard logging or monitoring protocols, EEM allows you to create your own event definitions through event detectors and specify automated actions (such as executing CLI commands, sending emails, or reloading the device) in response to those specific real-time events.\n\nWhile the other options serve different roles:\n\n• NetFlow is used for collecting and reporting IP traffic statistics.\n\n• SNMP is a standard for network management that uses polling and predefined trap notifications.\n\n• Syslog is a protocol used for sending and storing event notification messages across the network."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "questionType": "choice",
          "question": "Which SNMP recommendation is not valid?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Configure ACLs to restrict SNMP access to only known managers.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Set up SNMP views to restrict the manager to only access the needed set of MIBs.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Restrict access to read-only.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Always use MD5 authentication when SNMPv3 is not available, and you are forced to use SNMPv2c.",
              "isCorrect": true
            }
          ],
          "topic": "Topic 19.6.1",
          "explanation": "The statement regarding MD5 authentication and SNMPv2c is not valid because SNMPv2c does not support MD5 or SHA authentication; it relies solely on community strings, which are transmitted in cleartext and are not a robust security mechanism. MD5 and SHA authentication were specifically introduced as part of the enhanced security models in SNMPv3 to ensure secure transmission between the manager and agent.\n\nThe other three recommendations are explicitly listed in the sources as valid best practices:\n\n• Restrict access to read-only: NMS systems rarely require write access, so community credentials should be limited.\n\n• Set up SNMP views: This restricts a manager’s access to only the specific MIB trees they need to monitor.\n\n• Configure ACLs: Access Control Lists should be used to ensure that only authorized, known SNMP managers can communicate with the agent."
        },
        {
          "id": 19,
          "originalNumber": 19,
          "questionType": "choice",
          "question": "Which two encapsulation methods are supported by Cisco IOS VTIs? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "SSL",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "TLS",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "ESP",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "AH",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "GRE",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.7.0",
          "explanation": "Cisco IOS Virtual Tunnel Interfaces (VTIs) are a simplified mechanism for protecting site-to-site VPN tunnels. The sources explicitly state that the encapsulation for a VTI must be either IPsec Encapsulating Security Payload (ESP) or Authentication Header (AH).\n\nWhile GRE is a widely used tunneling protocol, the sources distinguish it as a separate technology that supports a broader range of protocols, whereas VTIs are specifically designed to terminate IPsec tunnels using a routable interface,. SSL and TLS are not mentioned as encapsulation methods for VTIs in these excerpts."
        },
        {
          "id": 20,
          "originalNumber": 20,
          "questionType": "choice",
          "question": "Which network virtualization architecture component transports traffic over isolated Layer 3 partitions?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "path isolation",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "access control",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "virtual machine",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "services edge",
              "isCorrect": false
            }
          ],
          "topic": "Topic 17.3.0",
          "explanation": "The network virtualization architecture consists of three main components: access control, path isolation, and services edge. Path isolation is the specific component that functions as an overlay network to create independent logical traffic paths, effectively isolating traffic between different groups over a shared physical infrastructure. This is achieved by maintaining isolated Layer 3 partitions using technologies such as Virtual Routing and Forwarding (VRF), GRE tunnels, or MPLS VPNs to provide end-to-end connectivity while keeping user groups separate."
        },
        {
          "id": 21,
          "originalNumber": 21,
          "questionType": "choice",
          "question": "How is debug traffic processed on a Cisco IOS router when the packets are generated by the router out its local interfaces?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco Express Forwarding switched",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "fast-switched",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "ASIC-switched",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "process-switched",
              "isCorrect": true
            }
          ],
          "topic": "Topic 20.7.7",
          "explanation": "Packets that are generated by a router or destined for a router are handled directly by the router's processor and are therefore process-switched. Because they are processed in this manner, they can be captured and displayed by diagnostic commands like debug ip packet. In contrast, packets that are merely forwarded through a router using hardware-accelerated methods like Cisco Express Forwarding (CEF) or fast-switching are not sent to the CPU and will not appear in debug output unless those switching features are specifically disabled."
        },
        {
          "id": 22,
          "originalNumber": 22,
          "questionType": "choice",
          "question": "Which option is an encryption mode supported by IPsec?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "tunnel mode",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "bypass mode",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "clear mode",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "pass-through mode",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.5.0",
          "explanation": "IPsec supports two primary encryption modes: transport mode and tunnel mode. Tunnel mode is considered more secure than transport mode because it encrypts both the packet payload and the original header, creating a new IP header in the process. This mode is commonly used in VPNs to hide unregistered internal IP addresses within the tunneled packet. In contrast, transport mode only encrypts the data portion (payload) of each packet and leaves the original packet header untouched."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "questionType": "choice",
          "question": "Which VPN solution relies on IKEv2?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "GET VPN",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "FlexVPN",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "DMVPN",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Easy VPN",
              "isCorrect": false
            }
          ],
          "topic": "Topic 18.6.2",
          "explanation": "FlexVPN is a unified VPN solution that specifically relies on open standards-based IKEv2 (Internet Key Exchange version 2) as its core security technology. It was created to simplify the complexity of deploying multiple VPN types by providing a single ecosystem that covers site-to-site, remote-access, and mobility requirements. Because it is built on IKEv2, FlexVPN is compatible with third-party VPN vendors and native VPN clients on mobile devices, such as Apple iOS and Android. While other solutions like DMVPN and GET VPN are used for scalable environments, the sources explicitly distinguish FlexVPN by its use of IKEv2 capabilities."
        },
        {
          "id": 24,
          "originalNumber": 24,
          "questionType": "choice",
          "question": "Which IP protocol defines GRE packets?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "47",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "51",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "17",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "50",
              "isCorrect": false
            }
          ],
          "topic": "Topic 17.7.0",
          "explanation": "IP protocol 47 is used to define GRE packets. Generic Routing Encapsulation (GRE) is a stateless tunneling protocol that transports various Layer 3 protocols (such as IP, IPX, and AppleTalk) by encapsulating them within a transport protocol. To do this, GRE adds a 20-byte IP delivery header and a 4-byte GRE header to the existing packet, allowing routing in"
        },
        {
          "id": 25,
          "originalNumber": 25,
          "questionType": "choice",
          "question": "Which two options are benefits of server virtualization? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "physical resource sharing",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "underutilization of CPU",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "more cooling requirements",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "more physical resource needs",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "hardware resource consolidation",
              "isCorrect": true
            }
          ],
          "topic": "Topic 17.2.4",
          "explanation": "The primary benefits of server virtualization include hardware resource consolidation and physical resource sharing. Consolidation allows for reduced costs and increased utilization by running multiple independent operating systems on a single physical server. This is achieved through a hypervisor that segments the hardware into multiple separate resource units that all draw from the same physical pool. In contrast, options like \"underutilization of CPU\" and \"more cooling requirements\" are characteristics of nonvirtualized environments, which virtualization specifically aims to correct."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "questionType": "choice",
          "question": "Which option is a logical container that holds all the resources that an operating system requires for normal operation, such as a graphics adapter, memory, processor, networking, and so on?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "host",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "virtual machine",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "physical server",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "guest",
              "isCorrect": false
            }
          ],
          "topic": "Topic 17.2.6\n\nA",
          "explanation": "virtual machine (VM) is a logical container that holds all the resources required by an operating system for normal operation, such as a graphics adapter, memory, processor, and networking. From the perspective of the operating system running within it, these virtualized components are functionally identical to the physical hardware found in a standard server. While a physical server's operating system has direct access to hardware, a VM relies on a hypervisor to allocate and forward requests to the physical resources of the host server."
        },
        {
          "id": 27,
          "originalNumber": 27,
          "questionType": "choice",
          "question": "Which statement correctly describes the IP SLA responder?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The IP SLA source and responder communicate over TCP.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The responder can respond to multiple IP SLA measurement operations that try to connect to the same port number.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "IP SLA operation with the responder has two phases: control and management.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "All IP SLA tests will only work if the IP SLA responder is used.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 20.8.1",
          "explanation": "The IP SLA responder is a Cisco IOS feature that enhances measurement accuracy by adding timestamps to packets to account for processing latency. It is designed to be highly scalable, allowing it to respond to multiple concurrent measurement operations even when they utilize the same port number. While it uses UDP port 1967 for control messages (refuting the TCP option), the responder is not required for all tests—basic operations like ICMP echoes can target any standard IP device, though advanced metrics like jitter often require the responder for accuracy."
        },
        {
          "id": 28,
          "originalNumber": 28,
          "questionType": "choice",
          "question": "In which NetFlow configuration step do you associate a NetFlow record with a NetFlow exporter?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Verify the configuration.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Configure a record.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Configure an exporter.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Configure a monitor.",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Apply FnF to interfaces.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.7.2",
          "explanation": "The NetFlow monitor serves as the central management point in a Flexible NetFlow configuration where disparate components are joined together.\n\nDuring the step to configure a monitor, the administrator must explicitly associate a specific NetFlow record (which defines the \"match\" and \"collect\" criteria) with a NetFlow exporter (which defines the destination and transport parameters for the flow data).\n\nThe monitor represents the memory-resident database that utilizes these associations to determine which traffic data to capture and where it should be sent once the flow expires or terminates.\n\nWhile records and exporters are defined in their own configuration steps, they remain inactive and unlinked until they are assigned to a flow monitor, which is then applied to a Layer 3 interface."
        },
        {
          "id": 29,
          "originalNumber": 29,
          "questionType": "choice",
          "question": "Which severity level indicates that a system is unusable?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Critical",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Emergency",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Error",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Alert",
              "isCorrect": false
            }
          ],
          "topic": "Topic 19.4.2",
          "explanation": "Cisco IOS Software generates syslog messages using eight severity levels, numbered from 0 to 7. Severity level 0 (Emergency) is the most severe level and indicates that the system is unusable. In contrast, Alert (Level 1) indicates immediate action is needed, Critical (Level 2) signifies critical conditions, and Error (Level 3) represents general error conditions."
        },
        {
          "id": 30,
          "originalNumber": 30,
          "questionType": "matching",
          "question": "Different NTP restrictions can be configured through ACLs on Cisco devices. Match the restriction keyword with the restriction it applies.",
          "chooseCount": 4,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Time synchronization requests and control queries are allowed. The device is not allowed to synchronize itself to remote systems that pass the access list.",
              "answer": "Serve"
            },
            {
              "id": "p2",
              "prompt": "Time synchronization requests and control queries are allowed. The device is allowed to synchronize itself to remote systems that pass the access list.",
              "answer": "Peer"
            },
            {
              "id": "p3",
              "prompt": "This keyword only allows synchronization requests.",
              "answer": "serve-only"
            },
            {
              "id": "p4",
              "prompt": "This keyword only allows control queries.",
              "answer": "query-only"
            }
          ],
          "options": [],
          "topic": "Topic 19.2.8",
          "explanation": null
        }
      ]
    },
    "ccnp-encor-v9-programmability": {
      "id": "ccnp-encor-v9-programmability",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 21 – 22",
      "title": "Checkpoint Exam : Programmability (Modules 21 – 22)",
      "description": "Examen Checkpoint officiel sur la programmabilité réseau (Python, JSON/XML, YANG, NETCONF, RESTCONF, Ansible, Puppet, Chef, SaltStack) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-21-22-checkpoint-exam-programmability-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 17,
      "passingScorePercent": 70,
      "totalQuestions": 17,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "Which option is an open-source, Python-based software for event driven IT automation.",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Puppet",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Ansible",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Saltstack",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Chef",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.2.4",
          "explanation": "Saltstack (or simply Salt) is an open-source, Python-based software specifically designed for event-driven IT automation. Developed in 2011, it features a highly modular and extensible design that allows it to be adapted for various enterprise use cases, including remote execution, configuration management, and cloud control. While Ansible is also Python-based, Saltstack is uniquely distinguished in the sources by its \"event-driven\" automation focus."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "Which two options are the main data encoding formats that are commonly used in Application Programming Interfaces? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "HTML",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "JSON",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "PDF",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "XML",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "DOCX",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.7.0",
          "explanation": "The two main data encoding formats commonly used in modern APIs are XML and JSON. These formats are favored for data transmission because they are human-readable (self-describing), hierarchical (storing values within values), and easily parsable by many programming languages. While other formats like YAML exist, XML and JSON are the core encodings supported by next-generation programmatic interfaces such as NETCONF and RESTCONF to ensure machine-to-machine communication is both efficient and predictable."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Which option is a language for data modeling and RPCs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "NETCONF",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "YANG",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "JSON",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "XML",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.11.0",
          "explanation": "YANG (Yet Another Next Generation) is a data modeling language specifically designed to model configuration and state data, as well as Remote Procedure Calls (RPCs) and notifications. While NETCONF is the protocol that carries these messages, YANG is the language used to define the syntax, semantics, and structure of the data and operations, utilizing specific statements like the YANG rpc statement to define protocol operations. In contrast, JSON and XML are considered data encoding formats used for transmission, and NETCONF is a management protocol rather than a modeling language."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "Which function can you use on an object to see its available built-in methods and attributes?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "dir()",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "print banner",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "split",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "format",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.2.3",
          "explanation": "The dir() function is a built-in Python helper utility used to inspect the properties of an object. When you pass an object to the dir() function, it returns a comprehensive list of all the attributes and built-in methods associated with that specific object. For instance, using dir(str) would display all available methods for manipulating strings, such as upper(), lower(), and split()."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which two options are logical operators used to evaluate whether a condition is True or False? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "in",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "and",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "or",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "is",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "is not",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.5.1",
          "explanation": "In Python, logical operators are used to combine and evaluate multiple expressions to determine a final True or False Boolean result. The and operator evaluates to True only if all conditions in the expression are True, while the or operator evaluates to True if at least one condition is True. Other options provided, such as in, are categorized as membership operators, while is and is not are defined as identity operators."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "Which function could be used to add a value to the specified area indicated by { }?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "replace",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "startswith",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "format",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "split",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.3.3",
          "explanation": "In Python, the format method is a built-in function used to modify or manipulate string data. Specifically, it is used to add a value to a specified area within a string that is indicated by curly braces { }.\n\nThe sources contrast this with other common string methods:\n\n• replace: Used to return a string where a specified value is replaced with another value (e.g., changing \":\" to \".\" in a MAC address).\n\n• startswith: Used to verify if a string begins with a specific value.\n\n• split: Used to create a list from a string by separating values based on an indicated character, such as a period in an IP address."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which data type requires you to supply a key to extract a value?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "list",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "dictionary",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "string",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "integers",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.7.0",
          "explanation": "In Python, a dictionary is a data structure that allows you to create key-value pairs to match specific keys to their corresponding values. According to the sources, while a list requires you to supply an integer index to extract an element, a dictionary requires you to supply a key to extract its value. This key-value system is also the basis for how JSON objects represent data."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "choice",
          "question": "Which Linux command could be used to verify which Python version would be used for a script if you did not include the shebang?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "which version",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "python version",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "which python version",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "which python",
              "isCorrect": true
            }
          ],
          "topic": "Topic 21.6.1",
          "explanation": "If a shebang (e.g., #!/usr/bin/env python) is not included as the first line of a script, the shell environment will use the version of Python that is currently configured in the system's environment. To verify which Python executable and version would be used in this scenario, you can use the Linux command which python. While the shebang is recommended to enforce a specific version or to run a script as a standalone binary, the which python command allows an administrator to check the environment's default path for the Python interpreter."
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "choice",
          "question": "Which option is not a requirement for next generation configuration management?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Provide easier to use management interfaces",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Support client-side validation and error checking",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Separate configuration and operational data",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Strong reliance on CLI",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Be both human and machine friendly",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.3.0\n\nN",
          "explanation": "ext-generation configuration management specifically aims to eliminate the industry's reliance on the traditional CLI for configuration tasks because it is considered error-prone, inefficient, and was designed for human-to-machine rather than machine-to-machine communication. According to the sources, the actual requirements for next-generation management include:\n\n• Providing easier-to-use management interfaces through well-defined APIs.\n\n• Supporting client-side validation and error-checking so that management applications can handle errors before they reach the device.\n\n• Separating configuration and operational data to ensure all parameters and statistics are programmatically accessible.\n\n• Being both human- and machine-friendly by utilizing structured, readable data formats like JSON and XML."
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which HTTP verb is normally used to update or replace an already existing resource?",
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
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "POST",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "PATCH",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.13.2",
          "explanation": "In REST APIs, the HTTP verb PUT is normally used to update or replace an already existing resource. When a client uses PUT, it sends a request with a complete updated representation of the resource, effectively overwriting the original content. This is distinct from PATCH, which is used to modify a resource by sending only the specific changes or attributes that need to be updated rather than the full resource. Additionally, GET is used for retrieving or reading a resource, while POST is primarily used to create a new resource."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "Which command could you use to execute the python script named “sample.py”?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "python sample.py",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "run sample.py",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "python execute sample.py",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "execute python sample.py",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.6.0",
          "explanation": "Python scripts are written in text editors and saved locally using the .py file extension. To execute a script from a terminal or command-line interface, the standard method is to invoke the python statement followed by the filename. For example, the sources note that a script named cisco.py is normally run with the command python cisco.py, and a script named welcome.py is executed using python welcome.py. Consequently, to execute a script named sample.py, you would use the command python sample.py."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "Which two Boolean expressions results in a value of True? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "True and False",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "True and True",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "True or False",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "not True",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "False not",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.5.0",
          "explanation": "In Python, Booleans are binary variables representing either True or False. The sources define the behavior of logical operators as follows:\n\n• and: For an expression using \"and\" to evaluate to True, all values in that expression must be True. Therefore, True and True results in True, while True and False results in False.\n\n• or: For an expression using \"or\" to evaluate to True, only one value needs to be True. Consequently, True or False results in True.\n\n• not: This operator takes the inverse of the value. Thus, not True results in False.\n\nThe option \"False not\" is not a standard logical expression format described in the sources, as the not operator precedes the value it modifies."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which two options are tools that require a software agent to be installed on all devices you want to manage? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Ansible",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Chef",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Puppet",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "REST",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "SSL",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.2.0",
          "explanation": "Puppet and Chef are both agent-based configuration management tools. Agent-based means that a software agent must be installed on every device you intend to manage, including servers, routers, switches, and firewalls.\n\n• Puppet uses an automation instruction set known as \"manifests\" and requires this agent to manage systems in a declarative manner.\n\n• Chef uses \"recipes\" and \"cookbooks\" to achieve a desired state and similarly relies on an agent, which the sources note can sometimes increase the time required to deploy the solution.\n\nIn contrast, Ansible is explicitly described as being agentless, which allows it to manage devices via APIs (such as REST, NETCONF, or SSH) without requiring any software to be pre-installed on the target hardware. REST and SSL are not configuration management tools; REST is a style of API, and SSL (often referred to as TLS in modern contexts) is a transport security protocol."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "Which best describes platforms or solutions that are driven by an object model, but do not use YANG?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Model Driven Programmability",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Vender Specific Attributes",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Custom Engineering",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Structured Engineering",
              "isCorrect": false
            }
          ],
          "topic": "Topic 22.7.0",
          "explanation": "Custom Engineering describes platforms or solutions that utilize custom device APIs developed when networking devices first began supporting programmatic interfaces.\n\nWhile these solutions are driven by an object model to define device characteristics, they do not use YANG as their data modeling language.\n\nThe sources contrast these with Model Driven Programmability, which is a \"model-based approach\" that specifically utilizes standardized data models like YANG to define the syntax, semantics, and constraints of the API.\n\nCustom engineering was often seen as a precursor to modern standards but was criticized for not supporting full functionality and requiring excessive work to translate CLI commands into proprietary, non-standard API calls."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "choice",
          "question": "Which two options correctly describe Python? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The syntax is similar to the English language.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "It is an interpreted language.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "It is not included on switch platforms, such as Nexus.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "It is a complex, challenging, programming language.",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "It must be added to Linux distributions in order to operate.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 21.2.0",
          "explanation": "Python is an interpreted language, meaning it executes instructions directly without the need to compile the program first. Its syntax is similar to the English language, which contributes to it being relatively easy to learn and having a low barrier to entry for network engineers. Contrary to the other options, Python is natively included on most Linux distributions and is explicitly supported on Cisco switch platforms like Cisco Nexus (NX-OS)."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "Which NETCONF operation loads all or part of a configuration to the specified datastore?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "<copy-config>",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "<get-config>",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "<get>",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "<edit-config>",
              "isCorrect": true
            }
          ],
          "topic": "Topic 22.10.1",
          "explanation": "The <edit-config> operation is used to load all or part of a configuration to a specified datastore. This operation allows for granular changes to the configuration, such as creating, deleting, or merging data.\n\nThe other options listed serve different purposes:\n\n• <copy-config>: This operation replaces an entire configuration datastore with another, rather than just loading a part of it.\n\n• <get-config>: This is used to retrieve all or part of a configuration datastore, not to load or modify data.\n\n• <get>: This operation retrieves both running configuration data and device state (operational) information."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "Which option is not a property of YANG?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Protocol independent",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Extensible and modular",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Analogous to XML schema and SMI for SNMP",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "does not provide semantics to better define data",
              "isCorrect": true
            }
          ],
          "topic": "Topic 22.8.1",
          "explanation": "YANG is a highly structured data modeling language used to define the syntax and semantics of data, which is used to enforce data input values and constraints. Therefore, the statement that it \"does not provide semantics\" is incorrect.\n\nThe other options are valid properties of YANG as described in the sources:\n\n• Protocol independent: While originally designed for NETCONF, it is protocol-independent and is also used by RESTCONF and potentially other protocols.\n\n• Extensible and modular: YANG supports extensibility through augmentation and provides data modularity through the use of modules and submodules.\n\n• Analogous to XML schema and SMI for SNMP: YANG modules serve a purpose for NETCONF and RESTCONF that is analogous to what MIBs (modeled via SMI) provide for SNMP. It defines data hierarchies called schema trees, which represent how data is structured and accessed."
        }
      ]
    },
    "ccnp-encor-v9-sdn": {
      "id": "ccnp-encor-v9-sdn",
      "categoryId": "ccnp-v9",
      "categoryName": "CCNP ENCOR v9",
      "courseCode": "Modules 23 – 26",
      "title": "Checkpoint Exam : Software-Defined Networking (Modules 23 – 26)",
      "description": "Examen Checkpoint officiel sur le SDN (Cisco Catalyst Center, Assurance, IBN, SD-Access, LISP, VXLAN, Cisco Catalyst SD-WAN, REST APIs) du cours CCNP ENCOR v9.",
      "sourceUrl": "https://itexamanswers.net/modules-23-26-checkpoint-exam-software-defined-networking-answers-ccnp-encor-v9.html",
      "lastUpdated": "2026-05-01",
      "quizChunkSize": 10,
      "examModeQuestionCount": 33,
      "passingScorePercent": 70,
      "totalQuestions": 33,
      "questions": [
        {
          "id": 1,
          "originalNumber": 1,
          "questionType": "choice",
          "question": "Which feature of Cisco Catalyst Center helps in the definition of user and device profiles that facilitate highly secure access and network segmentation based on business needs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "policy",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "platform",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "security",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "provision",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.3.0",
          "explanation": "Cisco Catalyst Center is composed of several core functional areas designed to automate and secure network operations. The policy component is specifically responsible for defining user and device profiles that facilitate highly secure access and network segmentation tailored to business needs. This feature supports group-based policies and segmentation to ensure consistent security enforcement across the infrastructure. Other primary components include Design for maps and topologies, Provisioning for automated service delivery, and Assurance for proactive network monitoring and optimization."
        },
        {
          "id": 2,
          "originalNumber": 2,
          "questionType": "choice",
          "question": "Which of these is the correct URL format to issue a REST API call to Cisco Catalyst SD-WAN Manager that retrieves a list of all devices in the network?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "http://manager_ip/dataservice/device",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "https://manager_ip/device",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "https://manager_ip/dataservice/device",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "http://manager_ip/device",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.6.3",
          "explanation": "The Cisco Catalyst SD-WAN Manager web server uses HTTPS as its primary communications protocol for REST API calls. To retrieve inventory data, such as a list of devices in the network, a GET request must be issued to the specific resource path /dataservice/device. Therefore, the correct full URL format is https://manager_ip/dataservice/device. The sources also note that before this call can be successful, the user must first authenticate (typically via the /j_security_check resource) to obtain a session cookie."
        },
        {
          "id": 3,
          "originalNumber": 3,
          "questionType": "choice",
          "question": "Which Cisco Catalyst Center API retrieves site hierarchy with network health information?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Client Health Intent API",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Network Device Detail Intent API",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Site Hierarchy Intent API",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Network Health Intent API",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.5.2",
          "explanation": "The Know Your Network API domain is organized into several subdomains. The Topology subdomain is specifically used to retrieve network health information and site and network physical, Layer 2, Layer 3, and VLAN information. In Cisco Catalyst Center, this functionality is provided by the Network Health Intent API, which allows for viewing the status of the network across the site hierarchy.\n\nThe other options listed serve different functions:\n\n• Client Health Intent API: Returns overall client health information organized into wired and wireless categories.\n\n• Network Device Detail Intent API: Retrieves detailed information about specific devices (such as configuration, interfaces, and modules) based on MAC address, UUID, or name.\n\n• Sites Subdomain: While it allows administrators to obtain site information and manage hierarchical collections of sites and buildings, it is not primarily described as the source for combined health metrics in the way the Topology/Network Health API is."
        },
        {
          "id": 4,
          "originalNumber": 4,
          "questionType": "choice",
          "question": "Which option is a centralized CLI management tool to help design and provision templates in the Cisco Catalyst Center?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Image Repository",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "CLI Template",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "CLI Edit tool",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "USB flash storage",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.4.11",
          "explanation": "CLI Templates is defined in the sources as a centralized CLI management tool provided by Cisco Catalyst Center. It features an interactive editor that allows network operators to design, build, and provision generic configurations for one or more devices within a specific site. The tool supports various functions, including creating, editing, and deleting templates, as well as validating them for errors and simulating them before deployment. These templates can utilize variables and interactive commands to automate repetitive configuration tasks efficiently."
        },
        {
          "id": 5,
          "originalNumber": 5,
          "questionType": "choice",
          "question": "Which Cisco Catalyst Center tool enables you to perform CRUD operations on templates and projects that the template programmer uses to facilitate design and provisioning workflows in Cisco Catalyst Center?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Command Runner API",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Template Programmer API",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Path Trace API",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Task API",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.5.2",
          "explanation": "The Template Programmer API (associated with the Configuration Templates subdomain) is a centralized CLI-management tool used to facilitate design and provisioning workflows within Cisco Catalyst Center. This specific API enables users to perform CRUD operations—allowing them to create, view (read), edit (update), and delete both templates and projects.\n\nThe other options serve different purposes:\n\n• Command Runner API: Used to retrieve CLI keywords and run read-only commands on devices to check real-time configuration.\n\n• Path Trace API: Used to trace application paths and provide hop-by-hop statistics to resolve performance issues.\n\n• Task API: Used to query the status of asynchronous actions to determine if a request completed successfully."
        },
        {
          "id": 6,
          "originalNumber": 6,
          "questionType": "choice",
          "question": "Which three options are examples of an overlay network? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IPv4",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "LISP",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "MPLS",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "RIPv2",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "IPX",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "CAPWAP",
              "isCorrect": true
            }
          ],
          "topic": "Topic 24.3.1\n\nAn",
          "explanation": "overlay network is defined as a logical topology used to virtually connect devices that is built on top of an arbitrary physical underlay topology. According to the sources, common examples of overlay networks include Multiprotocol Label Switching (MPLS), Locator/ID Separation Protocol (LISP), and Control and Provisioning of Wireless Access Points (CAPWAP).\n\n• LISP is utilized in the Cisco SD-Access fabric as the control plane to decouple an endpoint's identity from its location.\n\n• MPLS is a mechanism used to create Layer 3 VPNs and provide path isolation over shared physical infrastructure.\n\n• CAPWAP functions as a network overlay by forming a tunnel between an Access Point and a Wireless LAN Controller to transport all client traffic.\n\nIn contrast, IPv4 and IPX are typically referred to as \"passenger protocols\" that are encapsulated by these overlays, and RIPv2 is a traditional routing protocol."
        },
        {
          "id": 7,
          "originalNumber": 7,
          "questionType": "choice",
          "question": "Which Cisco SD-WAN component has programmatic interfaces to enable DevOps operations and to also extract performance statistics collected from the entire fabric?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco WAN Edge router",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Cisco vBond",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco vSmart controller",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cisco vManage",
              "isCorrect": true
            }
          ],
          "topic": "Topic 25.5.0",
          "explanation": "The Cisco Catalyst SD-WAN Manager (vManage) is the central management plane component of the fabric, serving as a \"single pane of glass\" for Day 0, Day 1, and Day 2 operations. According to the sources, it provides programmatic interfaces (REST APIs) that allow users to enable DevOps operations, such as automated configuration changes and template management. Additionally, these interfaces are used to extract performance statistics collected from the entire fabric, which can then be exported to external systems or the Cisco Catalyst SD-WAN Analytics tool for deeper examination. While WAN Edge routers do export statistics, they send them to the Manager, which centralizes them for programmatic access."
        },
        {
          "id": 8,
          "originalNumber": 8,
          "questionType": "choice",
          "question": "What are three primary focus areas for Cisco Catalyst Center Assurance and Analytics? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "licensing",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "streaming telemetry",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "end-to-end visibility",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "automation",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "endpoint predictability",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "predict performance",
              "isCorrect": true
            }
          ],
          "topic": "Topic 23.12.2",
          "explanation": "Cisco Catalyst Center Assurance and Analytics focus on transforming network operations through the following areas:\n\n• streaming telemetry: The Assurance architecture is designed for real-time data collection and ingestion, leveraging streaming technologies (streaming telemetry) to collect a variety of network telemetry and contextual data. This telemetry allows the system to poll network devices and collect data according to settings for SNMP, syslogs, and NetFlow.\n\n• end-to-end visibility: Assurance enables visibility of the entire network through multiple lenses, including geography, hierarchy, and topology. A key troubleshooting tool mentioned is Path Trace, which provides end-to-end visibility by following the path from any source to a destination device at the port level to resolve performance issues.\n\n• predict performance: A major focus of AI-driven analytics is to reduce outages and minimize business impact using predictive performance analytics. The system uses proactive sensor testing to test protocol connectivity and performance to discover issues before they occur, effectively allowing the network to predict performance and behavior trends.\n\nIn contrast, automation is primarily categorized under the Provisioning functional area, and licensing is a prerequisite for using advanced features like AI Analytics rather than a focus area of the analytics engine itself."
        },
        {
          "id": 9,
          "originalNumber": 9,
          "questionType": "choice",
          "question": "Which node serves as the gateway between the fabric domain and the known network outside of the fabric?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "intermediate node",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "fabric border node",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "default border node",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "border node",
              "isCorrect": false
            }
          ],
          "topic": "Topic 24.4.4",
          "explanation": "Fabric border nodes serve as the gateway between the Cisco SD-Access fabric site and the networks external to the fabric. They are responsible for network virtualization interworking, advertisement of EID subnets (typically using BGP), and SGT propagation from the fabric to the rest of the network. These nodes can be configured in different roles: an internal border connects to a well-defined/known set of IP subnets (such as a data center or shared services), while an external border serves as the gateway of last resort for unknown destinations outside the enterprise."
        },
        {
          "id": 10,
          "originalNumber": 10,
          "questionType": "choice",
          "question": "Which Cisco SD-WAN component displays application performance for the last 24 hours with the vQoE of 0 to 10, with 0 as the worst performance and 10 as the best?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco WAN Edge router",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Cisco vManage",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco vBond",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cisco vAnalytics",
              "isCorrect": true
            }
          ],
          "topic": "Topic 25.9.0",
          "explanation": "The Cisco Catalyst SD-WAN Analytics (vAnalytics) platform provides graphical representations of overlay network performance and includes a dashboard that serves as an interactive overview. This dashboard displays information covering the most recent 24 hours. Specifically, it tracks application performance using a QoE (Quality of Experience) score that ranges from 0 to 10, where 0 is the worst performance and 10 is the best. The platform calculates this score by analyzing telemetry data for latency, loss, and jitter, and it is customized for each specific application. While Cisco Catalyst SD-WAN Manager (vManage) extracts the performance statistics from the fabric, it exports them to the Analytics tool for this deeper level of processing and scoring."
        },
        {
          "id": 11,
          "originalNumber": 11,
          "questionType": "choice",
          "question": "Which Cisco SD-WAN component operates in the Management plane?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco vManage",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Cisco WAN Edge routers",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Cisco vBond",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Cisco vAnalytics",
              "isCorrect": false
            }
          ],
          "topic": "Topic 25.5.0",
          "explanation": "The Cisco Catalyst SD-WAN Manager (vManage) is the primary component of the management plane and serves as a \"single pane of glass\" for Day 0, Day 1, and Day 2 network operations. Its core functions include centralized provisioning, standardization of configurations, and providing real-time alerting and visibility across the entire fabric. It also offers programmatic interfaces (REST APIs) that allow for DevOps automation and the extraction of performance statistics.\n\nIn contrast, other components operate in different planes:\n\n• Cisco vBond (Cisco Catalyst SD-WAN Validator) operates in the orchestration plane.\n\n• Cisco WAN Edge routers operate in the data plane.\n\n• Cisco vSmart (Cisco Catalyst SD-WAN Controller) operates in the control plane.\n\n• Cisco vAnalytics is an optional cloud-based analytics engine used for deeper processing of the telemetry data exported by the Manager."
        },
        {
          "id": 12,
          "originalNumber": 12,
          "questionType": "choice",
          "question": "Which server return code indicates that the server accepted your request, but it must perform other actions in order to complete the request?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "200 OK",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "202 Accepted",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "201 Created",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "206 Partial Content",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.3.1",
          "explanation": "The HTTP status code 202 (Accepted) indicates that the server accepted your request, but it must perform other actions in order to complete the request. For instance, if the Cisco Catalyst Center platform needs to interact with various network devices to fulfill a specific command, it will return this code.\n\nIn contrast, other codes serve different purposes:\n\n• 200 (OK): Means the request succeeded and the response already includes the result of the action.\n\n• 4xx codes: Indicate that the request failed due to a client-side error, such as a 401 (Unauthorized) code.\n\n• 5xx codes: Indicate that the failure was due to a server-side error, such as a 503 (Service Unavailable) code."
        },
        {
          "id": 13,
          "originalNumber": 13,
          "questionType": "choice",
          "question": "Which node is part of the underlay network?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "edge node",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "border node",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "intermediate node",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "control node",
              "isCorrect": false
            }
          ],
          "topic": "Topic 24.4.0",
          "explanation": "The intermediate node is the node type that is part of the underlay network. While the campus fabric is composed of control plane, edge, border, and intermediate nodes, their functions differ between the underlay and overlay.\n\n• Edge nodes, border nodes, and control plane nodes all have specific functional roles within the overlay network, such as endpoint registration, acting as a gateway to external networks, or maintaining the host tracking database.\n\n• Intermediate nodes, by contrast, serve the underlay by providing IP reachability and connectivity between the other nodes in the fabric. As noted in the conversation history, they provide reachability within the fabric underlay but do not serve as external gateways or perform overlay-specific mapping functions.\n\nThe role of the underlay network is to establish physical connectivity using a routing protocol (typically IS-IS) to ensure packets can be delivered between fabric boundaries."
        },
        {
          "id": 14,
          "originalNumber": 14,
          "questionType": "choice",
          "question": "Which three options are limiting factors of traditional networks in the new age of digitalization? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "IP Access Lists",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "VRFs",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "VLANs",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "VXLANs",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "IP subnets",
              "isCorrect": true
            },
            {
              "id": "f",
              "text": "LISPs",
              "isCorrect": false
            }
          ],
          "topic": "Topic 24.2.3",
          "explanation": "Traditional networks rely on topology-based constructs that have become limiting factors in the face of modern digitalization requirements, such as host mobility and large-scale automation.\n\n• VLANs: The sources explicitly state that VLANs are a limiting factor due to inefficient use of available network links, rigid requirements on device placements, and limited scalability (restricted to 4,094 IDs).\n\n• IP subnets: Traditional segmentation is tied to the network topology, such as the IP subnet, which limits flexibility because policies are coupled to where a device is physically located in the network.\n\n• IP Access Lists: In traditional designs, security policies leverage ACLs that are statically mapped to IP and MAC addresses. The sources note that it is challenging to track ACLs, VLANs, and IP addresses to ensure optimal policy and security compliance as the network grows.\n\nIn contrast, VXLAN and LISP are modern overlay technologies used in Cisco SD-Access to overcome these traditional limitations. While VRFs are used in traditional segmentation, the primary \"topology-based\" constraints highlighted as hurdles for digitalization are VLANs, subnets, and the resulting complexity of ACL management."
        },
        {
          "id": 15,
          "originalNumber": 15,
          "questionType": "choice",
          "question": "What Cisco Catalyst Center tool provides visibility of what endpoints are there on the network and how they can be authenticated and assigned an appropriate policy for network usage, security, and segmentation?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Cisco Umbrella",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Design",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Provision",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "AI Endpoint Analytics",
              "isCorrect": true
            }
          ],
          "topic": "Topic 23.5.0\n\nA",
          "explanation": "I Endpoint Analytics is the specific tool within Cisco Catalyst Center that provides visibility of what endpoints are on the network. Beyond simple identification, it helps determine how they can be authenticated and assigned an appropriate policy for network usage, security, and segmentation. This tool is part of the SecOps functional area, which focuses on eliminating vulnerabilities and ensuring the network remains secure through proactive scans and endpoint classification."
        },
        {
          "id": 16,
          "originalNumber": 16,
          "questionType": "choice",
          "question": "Which three tools have been upgraded to include network operations in their process? (Choose three.)",
          "chooseCount": 3,
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
              "text": "Chef",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Puppet",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Inventory",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "RSTP",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "Ansible",
              "isCorrect": true
            }
          ],
          "topic": "Topic 23.4.0",
          "explanation": "Tools that were originally designed to help automate workflows for applications and cloud infrastructure, such as Ansible, Puppet, and Chef, have been upgraded to include network operations in their process. This integration of NetOps and DevOps concepts allows teams to use these tools to automatically make configuration changes and update network devices. While these tools began in the application and cloud sectors, they expanded their portfolios to include network automation after gaining significant traction in the industry."
        },
        {
          "id": 17,
          "originalNumber": 17,
          "questionType": "choice",
          "question": "Which Cisco Catalyst Center tool provides programmatic access to the discovery functionality of Cisco Catalyst Center?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Template Programmer API",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Command Runner API",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Network Discovery API",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Path Trace API",
              "isCorrect": false
            }
          ],
          "topic": "Topic 26.5.7",
          "explanation": "The Network Discovery API is the specific tool that provides programmatic access to the discovery functionality of Cisco Catalyst Center. It allows users to create, update, delete, and manage discovery jobs and their associated credentials, as well as retrieve the specific network devices that a particular discovery job acquired.\n\nThe other options in the query serve different operational purposes:\n\n• Template Programmer API: Used for CRUD operations on configuration templates and projects.\n\n• Command Runner API: Used to run read-only commands on network devices to retrieve real-time configuration.\n\n• Path Trace API: Used to analyze and trace application flows between endpoints to resolve performance issues."
        },
        {
          "id": 18,
          "originalNumber": 18,
          "questionType": "choice",
          "question": "Which building block of the IBN includes functions that ensure that the derived model-based policies are disseminated throughout any of the relevant network domains?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "programmability",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "activation",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "translation",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "assurance",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.4.2\n\nA",
          "explanation": "ctivation is the principal functional building block of an Intent-Based Network (IBN) that includes functions to ensure that the derived model-based policies are disseminated throughout any of the relevant network domains. These domains can include the data center, WAN, branches, and campuses. The activation block also handles orchestration, allowing policies to be limited in scope to specific parts of the network, and may employ additional functions to derive appropriate device configurations using standards-based APIs like NETCONF or REST.\n\nThe other two primary building blocks described in the sources serve different roles:\n\n• Translation: This block captures business intent and harmonizes it into a common model-based policy.\n\n• Assurance: This block provides continuous verification and contextual analysis to ensure the network is delivering the desired outcomes."
        },
        {
          "id": 19,
          "originalNumber": 19,
          "questionType": "choice",
          "question": "In Cisco Catalyst Center, what are three server settings for network services that can be applied at a global level, which can then be inherited by all sites under the hierarchy? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "DHCP",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "XML",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "AAA",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "PTP",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "TFTP",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "NTP",
              "isCorrect": true
            },
            {
              "id": "g",
              "text": "IRC",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.4.5",
          "explanation": "In Cisco Catalyst Center, the Design application uses a hierarchical format that allows network operators to define common resources at a global level, which are then inherited by all child sites, buildings, and floors. This eliminates the need to manually redefine the same resources in multiple places. According to the sources, the three network services from your list that can be applied globally and inherited are:\n\n• AAA: Used to perform network, client, and endpoint authentication via servers like Cisco ISE.\n\n• DHCP: Defined as a standardized set of configuration parameters for the entire hierarchy.\n\n• NTP: Configured to ensure all network infrastructure devices have synchronized time.\n\nOther attributes that follow this global inheritance and site-specific override model include DNS servers, syslog servers, SNMP trap servers, and device credentials. While settings are inherited by default, they can be manually overridden at any specific site level to meet local requirements."
        },
        {
          "id": 20,
          "originalNumber": 20,
          "questionType": "choice",
          "question": "Which LISP infrastructure device stores registered EID prefixes in a mapping database where they are associated to RLOCs?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "map resolver",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "proxy ETR",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "proxy ITR",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "map server",
              "isCorrect": true
            }
          ],
          "topic": "Topic 24.5.3\n\nA",
          "explanation": "map server (MS) is the specific LISP infrastructure device to which Egress Tunnel Routers (ETRs) register their EID prefixes. Its primary function is to store these registered EID prefixes in a mapping database where they are associated with RLOCs. All LISP sites then utilize this mapping system to resolve EID-to-RLOC mappings for traffic forwarding.\n\nIn the context of a Cisco SD-Access fabric, this map server functionality is typically combined with map resolver (MR) duties on the control plane node, which manages the host tracking database (HTDB) to maintain these associations. In contrast, a map resolver is the device that receives queries from Ingress Tunnel Routers (ITRs) rather than storing the registrations itself."
        },
        {
          "id": 21,
          "originalNumber": 21,
          "questionType": "matching",
          "question": "Match the Cisco SD-WAN component with the fabric plane to which it belongs:",
          "chooseCount": 4,
          "isMultipleChoice": false,
          "exhibits": [],
          "pairs": [
            {
              "id": "p1",
              "prompt": "Management",
              "answer": "Cisco vManage"
            },
            {
              "id": "p2",
              "prompt": "Orchestration",
              "answer": "Cisco vBond"
            },
            {
              "id": "p3",
              "prompt": "Data",
              "answer": "Cisco WAN Edge"
            },
            {
              "id": "p4",
              "prompt": "Control",
              "answer": "Cisco vSmart"
            }
          ],
          "options": [],
          "topic": "Topic 25.3.0",
          "explanation": null
        },
        {
          "id": 22,
          "originalNumber": 22,
          "questionType": "choice",
          "question": "In Cisco Catalyst Center, which important principle helps to lower IT costs and complexity while meeting business and user expectations?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "analytics",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "insights and actions",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "security and compliance",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "automation and assurance",
              "isCorrect": true
            }
          ],
          "topic": "Topic 23.7.1",
          "explanation": "Cisco Catalyst Center is characterized as a complete network automation and assurance solution. These two principles are fundamental to its ability to lower IT costs and reduce complexity:\n\n• Automation: By using features such as zero-touch provisioning (PnP) and Software Image Management (SWIM), the platform automates routine administrative and provisioning tasks, reducing device installation and upgrade times from hours to minutes. This policy-driven approach reduces the time spent on simple network operations and minimizes human error.\n\n• Assurance: This function provides deep visibility and AI-driven insights into the health of the network, devices, and applications. It utilizes guided remediation and predictive analytics to resolve issues quickly, which increases network uptime and ensures that business and user expectations for a seamless experience are met.\n\nTogether, automation and assurance transform network operations from a reactive, manual process into an agile, proactive system that aligns the network with business intent."
        },
        {
          "id": 23,
          "originalNumber": 23,
          "questionType": "choice",
          "question": "Where does Cisco Catalyst Center store all the unique software images?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "external TFTP server",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Cisco Networking Design Center",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "external FTP server",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Image Repository",
              "isCorrect": true
            }
          ],
          "topic": "Topic 23.4.10",
          "explanation": "Cisco Catalyst Center manages software through a feature called Software Image Management (SWIM). The Image Repository is a specific part of the design application that serves as the central software storage for the system. Within this repository, Cisco Catalyst Center stores all of the software images, Software Maintenance Updates (SMUs), subpackages, and ROM monitor images for the various devices in your network.\n\nThe repository allows network operators to view, import, and delete images, as well as designate specific versions as \"golden images\" to ensure consistency and compliance across the organization. While administrators can configure up to three external image distribution servers (using protocols like SFTP) to assist in the distribution process for different geographical regions, the primary management and storage of these unique images reside within the internal Image Repository."
        },
        {
          "id": 24,
          "originalNumber": 24,
          "questionType": "choice",
          "question": "Which three options correctly define the features of Cisco Catalyst Center? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "An open and extensible platform allows third-party applications and processes to exchange data.",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "Zero-touch device provisioning and software image management.",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "SAN and server provisioning and configuration management.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "User and device profiles that facilitate highly secure access and network segmentation based on business needs.",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "Device and network RADIUS-based authentication services through third-party FTP services.",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "Server profiles that limit access and avoid unnecessary network segmentation.",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.2.1",
          "explanation": "Cisco Catalyst Center provides a comprehensive set of management, automation, and security features for enterprise networks:\n\n• Open and Extensible Platform: The solution is designed as an open platform that utilizes northbound REST APIs and SDKs. This allows third-party applications and external systems (such as ITSM systems like ServiceNow or IPAM systems) to exchange data and intelligence, ensuring the network stays aligned with broader business processes.\n\n• Zero-touch Provisioning and SWIM: Catalyst Center simplifies network operations through automation features like Plug-and-Play (PnP) for near zero-touch device deployment. It also includes Software Image Management (SWIM), which provides a central repository for software images and automates upgrades to ensure all devices run validated \"golden images,\" reducing manual configuration time from hours to minutes.\n\n• Secure Access and Segmentation: The platform's Policy component allows administrators to define user and device profiles that enforce highly secure access. It supports granular macro- and micro-segmentation to isolate traffic and limit the network's attack surface based on business intent, often integrating with Cisco Identity Services Engine (ISE) for identity-based control.\n\nOther options, such as SAN provisioning or using FTP for RADIUS services, are not core functions of the Cisco Catalyst Center platform as described in the sources."
        },
        {
          "id": 25,
          "originalNumber": 25,
          "questionType": "choice",
          "question": "What are two benefits of VXLANs over the segmentation limiting factors of traditional VLANs? (Choose two.)",
          "chooseCount": 2,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "better utilization of available network paths",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "rigid requirements on device placement",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "eliminates the use of multitenant segments within the data center",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "inefficient use of available network links",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "flexible placement of multitenant segments throughout the data center",
              "isCorrect": true
            }
          ],
          "topic": "Topic 24.6.1",
          "explanation": "Traditional VLANs have several limiting factors in modern data centers, specifically the inefficient use of network links due to Spanning Tree Protocol (STP) and rigid requirements on device placement based on physical Layer 2 boundaries. VXLAN overcomes these issues through the following benefits:\n\n• Better utilization of available network paths: Unlike traditional VLANs that use STP to block redundant paths to prevent loops, VXLAN encapsulates frames into Layer 3 UDP packets. This allows the network to take full advantage of Layer 3 routing features like Equal-Cost Multipath (ECMP) and link aggregation, utilizing all available paths in the fabric.\n\n• Flexible placement of multitenant segments: VXLAN decouples the overlay network from the physical underlay, allowing Layer 2 segments to be extended over the Layer 3 infrastructure. This eliminates the traditional Layer 2 boundaries that forced rigid device placement, enabling multitenant segments to be placed anywhere throughout the data center.\n\nAdditionally, while VLANs are limited to 4,094 IDs, VXLAN supports up to 16 million coexistent segments using 24-bit VXLAN Network Identifiers (VNIDs)."
        },
        {
          "id": 26,
          "originalNumber": 26,
          "questionType": "choice",
          "question": "Which three routing protocols can the Cisco WAN Edge router use for learning reachability information from the service-side interfaces? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "RIPv1",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "EIGRP",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "OSPF",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "IS-IS",
              "isCorrect": false
            },
            {
              "id": "e",
              "text": "BGP",
              "isCorrect": true
            }
          ],
          "topic": "Topic 25.7.0",
          "explanation": "The Cisco WAN Edge router functions as the data plane element of the SD-WAN fabric, responsible for establishing secure connectivity and forwarding data between sites. To learn reachability information from the service-side (LAN) interfaces, these routers support several traditional routing protocols:\n\n• OSPF: WAN Edge routers support both OSPFv2 and OSPFv3 for learning routes from the local service-side network.\n\n• EIGRP: This protocol is explicitly used for learning reachability information from service-side interfaces and for brownfield integration with non-SD-WAN sites.\n\n• BGP: This is a standard routing protocol used on the service-side to exchange prefixes with local site routers.\n\nOnce these routes are learned from the service-side (configured in VPNs 1 through 65535), they are redistributed into the Overlay Management Protocol (OMP) to be advertised as service-side routes (vRoutes) across the SD-WAN overlay.\n\nNote: While the sources state that RIPv2 is also supported, RIPv1 and IS-IS are not listed as options for learning reachability from the service-side interfaces. (IS-IS is instead recommended for use in the network underlay for physical connectivity)."
        },
        {
          "id": 27,
          "originalNumber": 27,
          "questionType": "choice",
          "question": "What Cisco Catalyst Center tool detects anomalous behavior and stops its manifestation into security threats?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Power over Ethernet (PoE)",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "AI Endpoint Analytics",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "Cisco Secure Network Analytics",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "Identity Services Engine (ISE)",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.2.0",
          "explanation": "Cisco Catalyst Center uses AI Endpoint Analytics and endpoint trust score automation to detect anomalous behavior and prevent its manifestation into security threats. This tool is a core component of the platform's security architecture, providing deep visibility into what endpoints are on the network and allowing for granular macro- and micro-segmentation to limit the attack surface.\n\nAs part of the SecOps (Security Operations) capabilities, AI Endpoint Analytics classifies endpoints and helps enforce zero-trust network access. By monitoring endpoint behavior and calculating trust scores, it ensures that only authorized resources are accessed and that potential vulnerabilities are identified through continuous compliance checks. While other tools like Cisco Secure Network Analytics and Identity Services Engine (ISE) are part of the integrated security suite, AI Endpoint Analytics is specifically cited in the sources for its role in stopping the manifestation of anomalous behavior into threats."
        },
        {
          "id": 28,
          "originalNumber": 28,
          "questionType": "choice",
          "question": "What Cisco Catalyst Center component combines deep insights with rich context?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "Provisioning",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "Design",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "Assurance",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "Policy",
              "isCorrect": false
            }
          ],
          "topic": "Topic 23.3.0",
          "explanation": "Within the Cisco Catalyst Center architecture, Assurance is the specific component designed to combine deep insights with rich context to deliver a consistent user experience and proactively optimize the network. It acts as a real-time network data collection and analytics engine that uses contextual analysis to validate that business intent has been correctly applied and that desired outcomes are being achieved.\n\nKey functions of the Assurance component include:\n\n• Health Dashboards: Providing at-a-glance visibility into the overall health of network devices, clients, and applications.\n\n• Proactive Issue Resolution: Using AI-driven insights and predictive analytics to identify root causes and suggest remediation steps before they impact the business.\n\n• 360-Degree Views: Offering detailed, drill-down perspectives of specific network elements to facilitate faster troubleshooting."
        },
        {
          "id": 29,
          "originalNumber": 29,
          "questionType": "choice",
          "question": "Which statement best describes the Cisco SD-WAN solution?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "The Cisco SD-WAN solution is a software-based, virtual IP fabric overlay network relying on LISP and VXLAN for both wired and wireless LANs.",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "The Cisco SD-WAN solution allows service providers to accelerate WAN services directly for enterprise customers.",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "The Cisco SD-WAN is a hardware-based solution that covers switching, routing, voice, and VPN for small to medium-sized businesses.",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "The Cisco SD-WAN solution is a software-based, virtual IP fabric overlay network that builds a secure, unified connectivity over any transport network (the underlay).",
              "isCorrect": true
            }
          ],
          "topic": "Topic 25.2.0",
          "explanation": "The Cisco Catalyst SD-WAN solution represents a significant shift from older, hardware-based legacy WAN models to a secure, software-based, virtual IP fabric overlay. This overlay architecture is designed to build unified connectivity over any transport network, known as the underlay, which can include the public internet, MPLS, Metro Ethernet, and LTE/4G/5G.\n\nKey characteristics of this solution include:\n\n• Decoupling Planes: It separates the data plane forwarding from the control plane, allowing for centralized intelligence, automation, and simplified management.\n\n• Integration: It fully integrates routing, security, centralized policy, and orchestration into large-scale networks.\n\n• Transport Independence: Because it is software-based and virtualized, it can run over any transport circuits, enabling an active-active mix of different link types to optimize capacity and reduce costs.\n\n• Security: It utilizes a zero-trust security model with strong encryption, end-to-end segmentation, and certificate-based identity for all devices.\n\nIn contrast, the option mentioning LISP and VXLAN describes the Cisco SD-Access solution, which is intended for wired and wireless LANs rather than the WAN."
        },
        {
          "id": 30,
          "originalNumber": 30,
          "questionType": "choice",
          "question": "Which option describes an industry-standard API that the ONF defines?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "OpenFlex",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "REST",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "NETCONF",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "OpenFlow",
              "isCorrect": true
            }
          ],
          "topic": "Topic 26.2.1",
          "explanation": "OpenFlow is an industry-standard southbound API that is specifically defined by the Open Networking Foundation (ONF). Its primary function is to configure the flow tables in switches, which defines the specific flow path traffic takes through a network.\n\nThe other options represent different protocols or architectures:\n\n• NETCONF is a network management protocol standardized by the IETF (Internet Engineering Task Force) used to install, manipulate, and delete device configurations via XML-encoded messages.\n\n• OpFlex (likely the \"OpenFlex\" mentioned in the query) is an open-standard protocol that utilizes a declarative SDN model, where a controller like the Cisco APIC sends abstract policies to network elements.\n\n• REST (Representational State Transfer) is a web service architecture based on the HTTP request-response model that has not been formally defined by any specific standards body."
        },
        {
          "id": 31,
          "originalNumber": 31,
          "questionType": "choice",
          "question": "Which action used by the Cisco Catalyst Center Intent API writes new data at the path that the URL specifies?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "PUT",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "DELETE",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "GET",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "POST",
              "isCorrect": true
            }
          ],
          "topic": "Topic 26.3.0",
          "explanation": "The Cisco Catalyst Center Intent API utilizes standard HTTP request-response actions to interact with network resources. According to the sources, the POST action is used specifically to write new data at the path that the URL specifies. Its primary purpose is to create new data on the server.\n\nIn contrast, the other listed actions perform different functions:\n\n• GET: Used to retrieve or read data from the specified path.\n\n• PUT: Used to replace or update existing data; it cannot be used to create new data.\n\n• DELETE: Used to remove existing data at the specified path."
        },
        {
          "id": 32,
          "originalNumber": 32,
          "questionType": "choice",
          "question": "Which node provides the endpoints to a single anycast Layer 3 gateway?",
          "chooseCount": 1,
          "isMultipleChoice": false,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "control plane node",
              "isCorrect": false
            },
            {
              "id": "b",
              "text": "border node",
              "isCorrect": false
            },
            {
              "id": "c",
              "text": "edge node",
              "isCorrect": true
            },
            {
              "id": "d",
              "text": "intermediate node",
              "isCorrect": false
            }
          ],
          "topic": "Topic 24.4.1",
          "explanation": "In a Cisco SD-Access fabric, the edge node is the component that provides first-hop services for users and devices (endpoints) connected to the fabric. A critical function of the edge node is providing the anycast Layer 3 gateway.\n\nThe anycast gateway uses a common IP and MAC address that is present on every edge node sharing a common EID (Endpoint Identifier) subnet. This mechanism ensures that when an endpoint moves from one edge node to another, it does not need to change its default gateway configuration, facilitating seamless host mobility and optimal forwarding. While the control plane node manages the host tracking database and the border node acts as the exit point for the fabric, it is the edge node that directly interfaces with endpoints to provide this unified gateway service."
        },
        {
          "id": 33,
          "originalNumber": 33,
          "questionType": "choice",
          "question": "Which three options are characteristics of the Cisco vBond orchestration plane? (Choose three.)",
          "chooseCount": 3,
          "isMultipleChoice": true,
          "exhibits": [],
          "options": [
            {
              "id": "a",
              "text": "first point of authentication",
              "isCorrect": true
            },
            {
              "id": "b",
              "text": "authorizes all control connections",
              "isCorrect": true
            },
            {
              "id": "c",
              "text": "facilitates fabric discovery",
              "isCorrect": false
            },
            {
              "id": "d",
              "text": "distributes a list of Cisco vSmart controllers to all Cisco WAN Edge routers",
              "isCorrect": true
            },
            {
              "id": "e",
              "text": "real-time alerting",
              "isCorrect": false
            },
            {
              "id": "f",
              "text": "distributes a list of Cisco WAN Edge routers to all Cisco vSmart controllers",
              "isCorrect": false
            }
          ],
          "topic": "Topic 25.4.0",
          "explanation": "The Cisco Catalyst SD-WAN Validator (historically known as vBond) resides on the orchestration plane and is responsible for initial security and connectivity. Its key characteristics include:\n\n• First point of authentication: The Validator is the first point of contact for any device connecting to the SD-WAN overlay. It performs initial authentication for all devices to ensure they are authorized to join the network.\n\n• Authorizing control connections: It uses a zero-trust certificate-based allow list model to authorize all control connections within the fabric.\n\n• Distribution of controller lists: During the deployment process, the Validator automatically distributes a list of available Cisco Catalyst SD-WAN Controllers (vSmart) and the Cisco Catalyst SD-WAN Manager (vManage) to the WAN Edge routers. This enables the routers to establish the necessary control and management plane connections.\n\nOther options provided, such as facilitating fabric discovery, are characteristics of the Control Plane (vSmart), while real-time alerting is a feature of the Management Plane (SD-WAN Manager)."
        }
      ]
    }
  }
};
