import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';

import { Card } from '@mui/material';

import { addNewFpc } from 'src/api/fpc';

import AbpCreateFirst from './AbpCreate/abp-create-first';
import AbpCreateSecond from './AbpCreate/abp-create-second';
import AbpCreateThird from './AbpCreate/abp-create-third';
import AbpCreateFourth from './AbpCreate/abp-create-fourth';
import AbpCreateFifth from './AbpCreate/abp-create-fifth';
import AbpCreateSixth from './AbpCreate/abp-create-sixth';



export default function AbpCreateForm({ FpcId }) {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();
  const [step, setStep] = useState(1); // Step state to manage form pages

  // Create
  const handleCreateSuccess = () => {
    enqueueSnackbar('Saved Successfully!', { variant: 'success' });
  };

  const handleCreateError = (error) => {
    enqueueSnackbar(error.message, { variant: 'error' });
  };

  const handleCreateSettled = () => {
    queryClient.invalidateQueries('fpcList');
  };

  const createMutationOptions = {
    onSuccess: handleCreateSuccess,
    onError: handleCreateError,
    onSettled: handleCreateSettled,
  };
  const { mutateAsync: createNewFpc } = useMutation({
    mutationFn: addNewFpc,
    ...createMutationOptions,
  });
  const defaultValues = useMemo(
    () => ({
        // Basic Abp Information
        is_deleted: true,
        application_status: "",
        is_draft: true,
        applicant_name: "",
        gender: "",
        mobile_number: "",
        application_address: "",
        email: "",
        phone: "",
        firm_name: "",
        firm_location: "",
        block: "",
        district: "",
        pin_code: "",
        communication_address: "",
        registration_number: "",
        firm_type: "",
        tan: "",
        pan: "",
        gst: "",
        registration_date: "",
        num_directors: null,
        women_directors: null,
        paid_up_capital: "",
        business_type: "",
        present_structure: "",
        intended_products: "",
        brand_name: "",
        marketing_avenues: "",
        abp_fpc_dealings: "",
        benefits_from_govt: "",
        infra_details: "",
        awards: "",
        num_working_staff: null,
        other_details: "",
        business_plan_summary: "",
        creator: "",
        updater: "",

        promoters: [
          {
            name: "",
            designation: "",
            contact_number: "",
            email: "",
            category: "",
            gender: ""
          }
        ],
        commodities: [
          {
            name: "",
            products: ""
          }
        ],

        components: [
          {
            detail: "",
            number: null,
            capacity: "",
            estimated_cost_lakhs: ""
          }
        ],

        infra_availability: [
          {
            item: "",
            available: true,
            source: ""
          }
        ],

        fpc_interest: [
          {
            fpc_name: "",
            reason: ""
          }
        ],
        business_activities: [
          {
            key: "",
            activity: "",
            monthly_turnover: "",
            yearly_turnover: "",
            profit: ""
          }
        ],

         turnover_history: [
          {
            financial_year: "",
            turnover: "",
            profit: "",
            loss: ""
          }
        ],
        credit_facilities: [
          {
            financial_year: "",
            loan_amount: "",
            fund_source: "",
            term_period: "",
            loan_purpose: "",
            repayment: "",
            outstanding: ""
          }
        ],




        project_land: {
            has_land: true,
            ownership: "",
            lease_years: null,
            address: "",
            area_sq_m: "",
            lat_long: ""
        },

        budget: {
          total_project_cost: "",
          abp_contribution: "",
          grant_sought: "",
          loan_required: ""
        },
        rating_matrix: {
          operational_age: "",
          women_directors: "",
          bod_meetings: "",
          agm_conducted: false,
          agm_participation: "",
          audit_status: "",
          has_ceo: false,
          has_accountant: false,
          has_ca_cs: false,
          has_gst: false,
          has_fssai: false,
          has_export_license: false,
          fpc_linkage: "",
          warehouse_linkage: "",
          benefit_crop_advisory: false,
          benefit_custom_hiring: false,
          benefit_collection: false,
          benefit_other: false,
          turnover_range: "",
          land_status: "",
          convergence_scheme_count: "",
          loan_availed: false,
          regular_repayment: false
        },

    }),
    []
  );

  const NewUserSchema = Yup.object().shape({
    applicant_name: Yup.string().required('Applicant name is required'),
    mobile_number: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    // fpc_name: Yup.string().required('FPC name is required'),
    // district: Yup.string().required('District is required'),

    rating_matrix: Yup.object().shape({
      operational_age: Yup.string().required('Operational age is required'),
      women_directors: Yup.string().required('Women directors value is required'),
      bod_meetings: Yup.string().required('BoD meetings value is required'),
      agm_conducted: Yup.boolean(),
      agm_participation: Yup.string().required('AGM participation is required'),
      audit_status: Yup.string().required('Audit status is required'),
      has_ceo: Yup.boolean(),
      has_accountant: Yup.boolean(),
      has_ca_cs: Yup.boolean(),
      has_gst: Yup.boolean(),
      has_fssai: Yup.boolean(),
      has_export_license: Yup.boolean(),
      fpc_linkage: Yup.string().required('FPC linkage is required'),
      warehouse_linkage: Yup.string().required('Warehouse linkage is required'),
      benefit_crop_advisory: Yup.boolean(),
      benefit_custom_hiring: Yup.boolean(),
      benefit_collection: Yup.boolean(),
      benefit_other: Yup.boolean(),
      turnover_range: Yup.string().required('Turnover range is required'),
      land_status: Yup.string().required('Land status is required'),
      convergence_scheme_count: Yup.string().required('Convergence scheme count is required'),
      loan_availed: Yup.boolean(),
      regular_repayment: Yup.boolean(),
    }),
  });

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const { fields :promotersFields, append : promotersAppend, remove : promotersRemove } = useFieldArray({
    control: methods.control,
    name: 'promoters',
  });
  const { fields : commoditiesFields, append : commoditiesAppend, remove : commoditiesRemove } = useFieldArray({
    control: methods.control,
    name: 'commodities',
  });
  const { fields : componentsFields,append: componentsAppend, remove : componentsRemove } = useFieldArray({
    control: methods.control,
    name: 'components',
  });
  const { fields : infraFields,append: infraAppend, remove : infraRemove } = useFieldArray({
    control: methods.control,
    name: 'infra_availability',
  });
  const { fields : fpcFields,append: fpcAppend, remove : fpcRemove } = useFieldArray({
    control: methods.control,
    name: 'fpc_interest',
  });
  const { fields : businessFields,append: businessAppend, remove : businessRemove } = useFieldArray({
    control: methods.control,
    name: 'business_activities',
  });
  const { fields : turnoverFields,append: turnoverAppend, remove : turnoverRemove } = useFieldArray({
    control: methods.control,
    name: 'turnover_history',
  });
  const { fields : creditFields,append: creditAppend, remove : creditRemove } = useFieldArray({
    control: methods.control,
    name: 'credit_facilities',
  });


  
  

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
      };

      console.log('Form submission payload:', payload);
      enqueueSnackbar('ABP Saved Successfully!', { variant: 'success' });
      // await createNewFpc(payload);
    } catch (error) {
      console.error('FPC creation failed:', error);
    }
  };

  return (
    <Card sx={{ px: 2.5, pb: 3 }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>

          {step === 1 && <AbpCreateFirst methods={methods} setStep={setStep} />}
          {step === 2 && <AbpCreateSecond setStep={setStep} field={promotersFields} append={promotersAppend} remove={promotersRemove} field2={commoditiesFields} append2={commoditiesAppend} remove2={commoditiesRemove} />  }
          {step === 3 && <AbpCreateThird setStep={setStep} field={componentsFields} append={componentsAppend} remove={componentsRemove} field2={infraFields} append2={infraAppend} remove2={infraRemove} />  }
          {step === 4 && <AbpCreateFourth setStep={setStep} field={fpcFields} append={fpcAppend} remove={fpcRemove} field2={businessFields} append2={businessAppend} remove2={businessRemove} />  }
          {step === 5 && <AbpCreateFifth setStep={setStep} field={turnoverFields} append={turnoverAppend} remove={turnoverRemove} field2={creditFields} append2={creditAppend} remove2={creditRemove} />  }
          {step === 6 && <AbpCreateSixth methods={methods} setStep={setStep} />}

          
        </form>
      </FormProvider>
    </Card>
  );
}

AbpCreateForm.propTypes = {
  FpcId: PropTypes.string,
};
