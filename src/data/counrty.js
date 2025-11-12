 
 export const Countries= [
    {
      "country_name": "Canada",
      "country_code": "CA",
      "regulator": "Canadian Radio-television and Telecommunications Commission (CRTC)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":"",
          "business":""
        },
        "address_requirements": "Geographic numbers are tied to specific regions.[6]"
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "Sub-allocation to resellers is permitted. The primary carrier must obtain usage data from its resellers to demonstrate that 75% of all held numbers (including resold ones) are assigned to end-users to be eligible for new number allocations. Failure to report usage can lead to CRTC audits.[7]"
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent phone invoice (dated within the last 30 days)",
            "Utility bill with personal address",
            "Government-issued ID",
            "PIN Code (for mobile numbers) [8]"
          ],
          "business":["Recent phone invoice (dated within the last 30 days)",
            "Commercial registry or equivalent showing business address",
            "PIN Code (for mobile numbers) [8]"
          ]
        },
        "process_notes": "The number must remain active with the current provider until porting is complete. The process typically takes up to 15 days after document validation. One-time porting fees may apply."
      }
    },
    {
      "country_name": "United Kingdom",
      "country_code": "UK",
      "regulator": "Office of Communications (Ofcom)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":["Proof of Address (e.g., Utility bill, Tax notice)"
          ],
          "business":""
        },
        "address_requirements": "For Local numbers, a valid UK address is required. For Mobile and Toll-Free numbers, a worldwide address is acceptable."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "Sub-allocation of numbers to resellers is permitted with no restrictions on the number of tiers. However, the primary provider to whom Ofcom originally allocated the numbers retains ultimate responsibility for their use and must ensure compliance with Ofcom's rules. Ofcom has published a 'Good Practice Guide' which sets an expectation that primary providers will conduct due diligence on their reseller customers."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":["Copy of the most recent bill from the current provider [9]"
          ],
          "business":[
            "Copy of the most recent bill from the current provider [9]"
          ]
        },
        "process_notes": "Number portability is mandated by Ofcom to be free of direct charges to the consumer. Wholesale charges between providers are permitted but must be cost-oriented."
      }
    },
    {
      "country_name": "Australia",
      "country_code": "AU",
      "regulator": "Australian Communications and Media Authority (ACMA)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Contact phone number",
            "Passport or ID copy",
            "Proof of address (dated within 3 months)"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Passport or ID copy of an authorized representative"
          ]
        },
        "address_requirements": "For local numbers, an address in Australia is required. For toll-free numbers, a worldwide address is acceptable."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "The Telecommunications Act defines a three-tier hierarchy of specification, allocation, and 'issue' to customers. ACMA is considering stronger rules for sub-allocation and there is a forthcoming mandatory registration scheme for all Carriage Service Providers (CSPs), including resellers."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Last invoice",
            "For mobile numbers: 2 forms of Australian Government Issued Identity Cards (e.g., Driver's License, Passport)"
          ],
          "business":[
            "Last invoice",
            "Account number with current provider",
            "Australian Business Number (ABN) or Australian Company Number (ACN) (for toll-free numbers)"
          ]
        },
        "process_notes": "Porting requests are classified as CAT A (Simple) or CAT C (Complex). CAT C ports for business numbers can take up to 6-8 weeks. Additional identity verification is required for mobile number ports to prevent fraud."
      }
    },
    {
      "country_name": "Austria",
      "country_code": "AT",
      "regulator": "Austrian Regulatory Authority for Broadcasting and Telecommunications (RTR)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Proof of Address (e.g., utility bill no older than 3 months)"
          ],
          "business":[
            "Proof of Address (e.g., company registration)"
          ]
        },
        "address_requirements": "A registered address within the geographic region of the requested number is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "No specific regulations prohibiting sub-allocation were identified. Resellers operating as communications service providers are subject to wholesale porting charges regulated by the RTR."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Copy of recent phone invoice",
            "Utility bill with personal address",
            "Government-issued ID or passport"
          ],
          "business":[
            "Copy of recent phone invoice",
            "Commercial registry or equivalent"
          ]
        },
        "process_notes": "Requires 'NÜV' information from the previous provider. A regulated charge of up to €10 may apply. For geographic numbers, proof of address within the prefix area is required."
      }
    },
    {
      "country_name": "Belgium",
      "country_code": "BE",
      "regulator": "Belgian Institute for Postal Services and Telecommunications (BIPT)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Contact phone number",
            "Passport or ID copy",
            "Proof of address (dated within 3 months)"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Passport or ID copy of an authorized representative",
            "Company registration certificate (e.g., Commercial Register Excerpts)",
            "VAT number"
          ]
        },
        "address_requirements": "For local numbers, a business address within the corresponding prefix region is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "A single level of sub-allocation is permitted, provided the reseller is a notified operator or service provider in Belgium. A 'Request for a suballocation' form is available from BIPT."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Copy of recent phone invoice",
            "Utility bill with personal address",
            "Government-issued ID or passport"
          ],
          "business":[
            "Copy of recent phone invoice",
            "Commercial registry or equivalent",
            "VAT Number (for mobile numbers)"
          ]
        },
        "process_notes": "Number portability is offered free of charge between all Belgian operators, including in a reseller context. Geographic numbers require a local address in Belgium."
      }
    },
    {
      "country_name": "Czech Republic",
      "country_code": "CZ",
      "regulator": "Czech Telecommunication Office (CTU)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "address_requirements": "A local address corresponding to the number's area code is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "No specific regulations regarding sub-allocation were identified in the available information."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "OKU Code (14-digit unique code from current provider)",
            "Recent invoice from current provider"
          ],
          "business":[
            "OKU Code (14-digit unique code from current provider)",
            "Recent invoice from current provider"
          ]
        },
        "process_notes": "One-time wholesale porting fees apply, which would be incurred by a reseller. Charges range from approximately €25 to €30 per request, plus a per-number fee."
      }
    },
    {
      "country_name": "Denmark",
      "country_code": "DK",
      "regulator": "Danish Business Authority (DBA)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Proof of Address [4]"
          ],
          "business":[
            "Proof of Address"
          ]
        },
        "address_requirements": "An international address is acceptable."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "No specific regulations regarding sub-allocation were identified. A new reverse-charge VAT rule applies to the resale of telecommunication services."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "process_notes": "Porting charges may apply for retail customers, while wholesale charges between providers are subject to commercial agreements."
      }
    },
    {
      "country_name": "Finland",
      "country_code": "FI",
      "regulator": "Finnish Transport and Communications Agency (Traficom)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Contact phone number",
            "Passport or ID copy"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Company registration certificate"
          ]
        },
        "address_requirements": "A worldwide address is acceptable for both personal and business use."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "No specific regulations regarding sub-allocation were identified."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "process_notes": "Wholesale providers and resellers may be subject to porting fees, such as a €10 request fee plus a €22 per-number fee for local numbers."
      }
    },
    {
      "country_name": "France",
      "country_code": "FR",
      "regulator": "Autorité de régulation des communications électroniques, des postes et de la distribution de la presse (Arcep)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""
          ],
          "business":[""
          ]
        },
        "address_requirements": "A French address is required. As of January 2023, geographic numbers (01-05) are 'Versatile' and can be used anywhere in France, not restricted to a specific region."
      },
      "sub_allocation": {
        "allowed": false,
        "rules": "Sub-allocation of numbers is prohibited. Resellers must either become licensed operators and obtain their own number allocations from ARCEP or use alternative models like number hosting or a tri-party agreement (TPA) where a direct relationship is established between the end-user and the primary number holder."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual": [
            "Letter of Authorization (LOA) [11]",
            "Recent phone invoice [11]",
            "Proof of ID (ID card or passport) [11]",
            "Proof of address (utility bill, etc.) [11]"
          ],
          "business": [
            "Letter of Authorization (LOA) [11]",
            "Recent phone invoice [11]",
            "SIRET number [11]",
            "Enterprise Registration Certificate (Kbis or INSEE document) dated within the last 3 months [11]"
          ]
        },
        "process_notes": "Wholesale porting processes may involve subscription and porting costs."
      }
    },
    {
      "country_name": "Germany",
      "country_code": "DE",
      "regulator": "Bundesnetzagentur (BNetzA)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[
            "Proof of Address (Excerpt from the commercial register or Trade license showing local address)"
          ]
        },
        "address_requirements": "A local address within the geographic area of the number's prefix is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "Sub-allocation is permitted through a two-stage procedure where the primary allocatee can sub-allocate numbers to subscribers. A prerequisite is that the entity providing the number also provides access to the public telephone network. For national (nomadic) numbers, the end-subscriber must have a place of residence or business in Germany."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent Invoice",
            "Proof of address",
            "ID / Passport copy"
          ],
          "business": [
            "Porting Form with company stamp [12]",
            "Recent Invoice",
            "Proof of address",
            "Company Registration certificate"
          ]
        },
        "process_notes": "Resellers are subject to regulated wholesale porting fees, with a maximum set by BNetzA at €3.58 (net)."
      }
    },
    {
      "country_name": "Greece",
      "country_code": "GR",
      "regulator": "Hellenic Telecommunications and Post Commission (EETT)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Contact phone number",
            "Passport or ID copy",
            "VAT number"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Passport or ID copy of an authorized representative",
            "Company registration certificate",
            "VAT number of an authorized representative",
            "Letter of Authorization (LOA) or Power of Attorney (POA)"
          ]
        },
        "address_requirements": "A local address that matches the number's area code is required."
      },
      "sub_allocation": {
        "allowed": false,
        "rules": "Tertiary assignment of numbering resources is prohibited. A provider can make a 'secondary allocation' to an end-user, but a reseller cannot acquire numbers and then sub-allocate them further."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Greek TAX / VAT ID",
            "ID / Passport copy",
            "Latest Invoice"
          ],
          "business":[
            "Greek TAX / VAT ID or company registration number",
            "ID / Passport copy of authorized person",
            "Company Registration certificate",
            "Latest Invoice"
          ]
        },
        "process_notes": "Porting is generally free for consumers. Wholesale porting charges between a primary provider and a reseller are subject to commercial agreements and EETT oversight."
      }
    },
    {
      "country_name": "Hungary",
      "country_code": "HU",
      "regulator": "National Media and Infocommunications Authority (NMHH)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Nationality",
            "Place and date of birth",
            "Address/Place of residence",
            "Identification document (Passport, National ID, Driver's License)"
          ],
          "business":[
            "Tax registration number",
            "Details about directors and beneficial owners"
          ]
        },
        "address_requirements": "A registered address within the geographic area of the requested number is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "The sub-allocation of numbers to resellers is permitted in Hungary."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent invoice from current provider",
            "Copy of official ID for the authorized person"
          ],
          "business":[
            "Recent invoice from current provider",
            "VAT/TAX ID",
            "Company registration",
            "Copy of official ID for the authorized person"
          ]
        },
        "process_notes": "Number portability is free of charge for subscribers. Any wholesale charges between a primary provider and a reseller would be determined by their commercial agreement."
      }
    },
    {
      "country_name": "Iceland",
      "country_code": "IS",
      "regulator": "Electronic Communications Office of Iceland (ECOI)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[
            "Company name"
          ]
        },
        "address_requirements": "A worldwide address is acceptable for both personal and business use."
      },
      "sub_allocation": {
        "allowed": false,
        "rules": "Sub-assignment of Iceland phone numbers is prohibited by some providers. No general rule from the regulator was identified."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "process_notes": "Mobile number portability is available and free for consumers. Any wholesale porting charges in a reseller context would be subject to commercial agreements."
      }
    },
    {
      "country_name": "Ireland",
      "country_code": "IE",
      "regulator": "Commission for Communications Regulation (ComReg)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Proof of Address (dated within 3 months)"
          ],
          "business":[
            "Business Registration Certificate",
            "Proof of Address (dated within 3 months)"
          ]
        },
        "address_requirements": "An address that matches the number's area code is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "ComReg allocates numbering capacity to network operators, who then sub-allocate individual numbers to service providers and end-users. The sub-allocated capacity remains part of the national resource managed by ComReg."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent phone invoice",
            "Utility bill with personal address",
            "Government-issued ID or passport"
          ],
          "business":[
            "Recent phone invoice",
            "Commercial registry or equivalent"
          ]
        },
        "process_notes": "Regulated wholesale charges apply for number porting in a reseller context, with maximum charges set by ComReg (e.g., €3.50 for Geographic Number Portability)."
      }
    },
    {
      "country_name": "Italy",
      "country_code": "IT",
      "regulator": "Autorità per le Garanzie nelle Comunicazioni (AGCOM)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Registered Address"
          ],
          "business":[
            "Company VAT number",
            "Signatory Tax Code ('Codice Fiscale')"
          ]
        },
        "address_requirements": "A registered address anywhere in Italy is required."
      },
      "sub_allocation": {
        "allowed": false,
        "rules": "Sub-assignment of Italy phone numbers is prohibited by some providers. No general rule from the regulator was identified."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent phone invoice",
            "Government-issued ID or passport",
            "Utility bill with personal address in Italian",
            "Migration code from current provider",
            "Fiscal Code of authorized person"
          ],
          "business":[
            "Recent phone invoice",
            "Commercial registry with business address in Italian",
            "Migration code from current provider",
            "Italian VAT number",
            "Fiscal Code of authorized person"
          ]
        },
        "process_notes": "The service is free for subscribers, but AGCOM sets a regulated inter-operator rate (a wholesale charge) for each ported number, which would apply in a reseller context."
      }
    },
    {
      "country_name": "Netherlands",
      "country_code": "NL",
      "regulator": "Authority for Consumers and Markets (ACM)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "address_requirements": "Proof of a company address located within the region of the requested number's prefix is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "An implied framework for reseller operations exists. Entities that only engage in activities on behalf of an already registered provider do not need to register themselves with the ACM."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent phone invoice",
            "Utility bill with personal address in the Netherlands",
            "Government-issued ID or passport"
          ],
          "business":[
            "Recent phone invoice",
            "Commercial registry with business address in the Netherlands"
          ]
        },
        "process_notes": "Resellers are subject to wholesale porting tariffs from other providers, which are regulated by the ACM to be cost-oriented."
      }
    },
    {
      "country_name": "Norway",
      "country_code": "NO",
      "regulator": "Norwegian Communications Authority (Nkom)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Date of Birth",
            "Contact phone number",
            "Passport or ID copy"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Company ID",
            "Norwegian company registration certificate"
          ]
        },
        "address_requirements": "For local numbers, businesses must provide an address within the region of the number's prefix. Individuals must provide an address in Norway."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "The Norwegian Numbering Regulations explicitly permit a sub-allocation model, stating that primary providers can allocate 8-digit numbers to 'other service providers'."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Latest invoice"
          ],
          "business":[
            "Latest invoice",
            "Local tax ID or VAT number"
          ]
        },
        "process_notes": "Any wholesale porting charges between the primary provider and a reseller would be subject to their commercial agreement."
      }
    },
    {
      "country_name": "Poland",
      "country_code": "PL",
      "regulator": "Office of Electronic Communications (UKE)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Contact phone number",
            "Passport or ID copy",
            "Proof of address (dated within 3 months)"
          ],
          "business":[
            "Company name",
            "Contact phone number",
            "Legal papers of company registration"
          ]
        },
        "address_requirements": "An address matching the DID area code is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "No specific regulations regarding sub-allocation were identified."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""]
        },
        "process_notes": "Providers may charge a one-time fee, but the regulator (UKE) has indicated this should not exceed PLN 50. Any charges between a primary carrier and a reseller would be subject to their wholesale commercial agreement."
      }
    },
    {
      "country_name": "Portugal",
      "country_code": "PT",
      "regulator": "Autoridade Nacional de Comunicações (ANACOM)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[
            "Tax ID"
          ]
        },
        "address_requirements": "A local address corresponding to the area code of the requested number is required."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "ANACOM Regulation 1028/2021 establishes conditions for sub-allocation. The primary number holder is responsible for fees, while the reseller is responsible for efficient use. Tertiary assignment (reseller sub-allocating further) is prohibited."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[""
          ],
          "business":[""
          ]
        },
        "process_notes": "Porting is free for the consumer. ANACOM sets a maximum price for the wholesale cost of portability that the donor provider can charge to the recipient provider (the reseller's primary carrier)."
      }
    },
    {
      "country_name": "Slovakia",
      "country_code": "SK",
      "regulator": "Regulatory Authority for Electronic Communications and Postal Services (TUSR)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""
          ],
          "business":[
            "Certificate of incorporation / trade register statement"
          ]
        },
        "address_requirements": "The use of numbers requires an individual authorization from the regulator."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "Sub-allocation of numbers to resellers is permitted in Slovakia, though specific governing regulations were not identified."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent invoice"
          ],
          "business":[
            "Recent invoice",
            "VAT / TAX ID"
          ]
        },
        "process_notes": "Resellers are subject to wholesale porting fees, which are approximately €30 per request and €10 per number."
      }
    },
    {
      "country_name": "Spain",
      "country_code": "ES",
      "regulator": "Comisión Nacional de los Mercados y la Competencia (CNMC)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[""],
          "business":[""
          ]
        },
        "address_requirements": "Registration is required to operate as a provider."
      },
      "sub_allocation": {
        "allowed": true,
        "rules": "Resellers can obtain sub-allocations from primary assignees but require authorization from the CNMC. A 75% utilization threshold is in place, meaning a reseller must use at least 75% of its current numbers before receiving more. The primary assignee remains responsible for the numbers."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Recent phone invoice",
            "Customer Service Record (CSR)"
          ],
          "business":[
            "Recent phone invoice",
            "Customer Service Record (CSR)",
            "Commercial registry",
            "CIF (Tax ID)"
          ]
        },
        "process_notes": "Any wholesale charges for porting are determined by the commercial agreement between the assigning operator and the reseller."
      }
    },
    {
      "country_name": "Sweden",
      "country_code": "SE",
      "regulator": "Swedish Post and Telecom Authority (PTS)",
      "number_allocation": {
        "end_user_documentation": {
          "individual":[
            "Proof of address"
          ],
          "business":[
            "Address matching the number's area code"
          ]
        },
        "address_requirements": "A local address matching the number's area code is required."
      },
      "sub_allocation": {
        "allowed": false,
        "rules": "As of June 2025, sub-allocation of numbers is prohibited. All communications providers must obtain number licenses directly from PTS to provide numbers to their customers. This applies to both new and existing arrangements."
      },
      "number_porting": {
        "end_user_documentation": {
          "individual":[
            "Online Porting Form"
          ],
          "business":[""
          ]
        },
        "process_notes": "With the prohibition of sub-allocation, former resellers must become licensed operators and will be subject to any direct inter-carrier wholesale porting charges."
      }
    }
    ]
  