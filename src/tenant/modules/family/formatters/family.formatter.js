module.exports = class FamilyFormatter {   

        get_family_list(req) {
            return {
                name: req.query.name,
                email: req.query.email,
                phone: req.query.phone,
                family_unique_id: req.query.family_unique_id,
                owner_id: req.query.owner_id,
                building_id:req.query.building_id,
                unit_no:req.query. unit_no,
                limit: req.query.limit ? parseInt(req.query.limit) : null,
                offset: req.query.offset ? parseInt(req.query.offset) : null
            }
        }

        familyStatusChange(req) {
            let data = {};
            data['customer_id'] = req.body.customer_id;
            data['status'] = req.body.status;
            // data['tenant_id'] = req['tenant_id'];
            return data;
        }

        edit_familyMember(req) {
            return {
                customer_unique_id: req.body.customer_unique_id,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,                
                referrer_id: req.body.referrer_id,
                gender:req.body.gender,
                referrer_relation: req.body.referrer_relation,
                birthday:req.body.birthday,
                anniversary:req.body.anniversary,
                spouse_name:req.body.spouse_name,
                children:req.body.children
            };
        }

        list_referral(req) {
            return { };
        }

        addFamily(req) {
            return {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                referrer_relation: req.body.referrer_relation,
                referrer_id: req.body.referrer_id,
                birthday:req.body.birthday,
                anniversary:req.body.anniversary,
                spouse_name:req.body.spouse_name,
                children:req.body.children
            }
        };
        familyList(req) {
            return {
                customer_unique_id: req.params.customer_unique_id
            }
        };
    
        deleteFamily(req) {
            return {
                customer_unique_id: req.body.customer_unique_id,
                family_unique_id: req.body.family_unique_id
            }
        };
            /**
         * Add member type
         *
         * @param req
         * @returns {Array}
        //  */
        // add_familyMember(req) {
        //     return {
        //         id: req.body.id,
        //         first_name: req.body.first_name,
        //         last_name: req.body.last_name,
        //         email: req.body.email,
        //         phone: req.body.phone,
        //         referrer_id: req.body.referrer_id,
        //         gender:req.body.gender,
        //         // status:req.body.status,
        //         // oam_commission: req.body.oam_commission,
        //         // owner_commission: req.body.owner_commission,
        //         // gain_commission: req.body.gain_commission,
        //         // manager: req.body.manager,
        //         language_code: req.query.language_code
        //     };
        // }
    
    
        /**
         * oam list formatter
         *
         * @param {*} req
         * @returns
         */
        // get_familyMember(req) {
        //     return {
        //         customer_unique_id: req.params.customer_unique_id,
        //         language_code: req.query.language_code
        //     };
        // }

      
    
         /**
         * Edit oam customer Formatter
         *
         * @param req
         */
      


       
    
       
      
    }
