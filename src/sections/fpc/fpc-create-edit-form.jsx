import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useMemo, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';

import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { addNewFpc } from 'src/api/fpc';

import { RHFSwitch, RHFDropDown, RHFTextField } from 'src/components/hook-form';

import FpcCreateNinth from './FpcCreate/fpc-create-nine';
import FpcCreateFirst from './FpcCreate/fpc-create-first';
import FpcCreateThird from './FpcCreate/fpc-create-third';
import FpcCreateFifth from './FpcCreate/fpc-create-fifth';
import FpcCreateSixth from './FpcCreate/fpc-create-sixth';
import FpcCreateEight from './FpcCreate/fpc-create-eight';
import FpcCreateSecond from './FpcCreate/fpc-create-second';
import FpcCreateFourth from './FpcCreate/fpc-create-fourth';
import FpcCreateSeventh from './FpcCreate/fpc-create-seventh';

export default function FpcCreateEditForm({ FpcId }) {
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
      // Basic FPC Information
      application_no: '',
      applicant_name: '',
      mobile_number: '',
      application_address: '',
      email: '',
      phone: '',
      fpc_name: '',
      fpc_location: '',
      block: '',
      district: '',
      pin_code: '',
      communication_address: '',
      cin_number: '',
      tan: '',
      pan: '',
      gst: '',
      registration_date: null,
      num_bod_members: 0,
      num_bod_women: 0,
      num_shareholders: 0,
      paid_up_capital: '0.00',
      is_women_fpc: false,
      present_infrastructure: '',
      raw_materials: '',
      brand_name: '',
      market_location: '',
      is_gi_product: false,
      gi_details: '',
      is_tribal_or_forest: false,
      tribal_details: '',
      is_export_apeda: false,
      apeda_details: '',
      promoter_agency: '',
      services_provided: '',
      awards: '',
      npa_declared: false,
      has_power_of_attorney: false,
      business_plan_summary: '',

      // board_members
      board_members: [
        {
          name: '',
          designation: '',
          din: '',
          contact_number: '',
          category: '',
          gender: '',
        },
      ],

      // member_categories

      member_categories: [
        {
          category: 'Scheduled Caste',
          male_number: null,
          female_number: null,
          transgender_number: null,
          total_number: null,
          male_percentage: '',
          female_percentage: '',
          transgender_percentage: '',
          total_percentage: '',
        },
        {
          category: 'Scheduled Tribe',
          male_number: null,
          female_number: null,
          transgender_number: null,
          total_number: null,
          male_percentage: '',
          female_percentage: '',
          transgender_percentage: '',
          total_percentage: '',
        },
        {
          category: 'OBC',
          male_number: null,
          female_number: null,
          transgender_number: null,
          total_number: null,
          male_percentage: '',
          female_percentage: '',
          transgender_percentage: '',
          total_percentage: '',
        },
        {
          category: 'General',
          male_number: null,
          female_number: null,
          transgender_number: null,
          total_number: null,
          male_percentage: '',
          female_percentage: '',
          transgender_percentage: '',
          total_percentage: '',
        },
      ],

      // staff_members

      staff_members: [
        {
          name: '',
          designation: '',
          education: '',
          contact_number: '',
          email: '',
          category: '',
          gender: '',
          months_associated: null,
          monthly_salary: '',
        },
      ],

      collected_produce: [
        {
          commodity_primary: '',
          commodity_secondary: '',
          last_fy_area: '',
          last_fy_production: '',
          current_fy_area: '',
          current_fy_production: '',
        },
      ],

      business_activities: [
        {
          key: '',
          activity_name: '',
          turnover: '',
          profit: '',
        },
      ],

      turnovers: [
        {
          financial_year: '',
          turnover: '',
          profit: '',
          loss: '',
        },
      ],
      credits: [
        {
          financial_year: '',
          loan_amount: '',
          fund_source: '',
          term_period: '',
          purpose: '',
          repayment: '',
          outstanding: '',
        },
      ],

      grants: [
        {
          scheme_name: '',
          department: '',
          grant_amount: '',
          year_received: null,
        },
      ],
      components: [
        {
          detail: '',
          number: null,
          capacity: '',
          estimated_cost_lakhs: '',
        },
      ],

      infrastructure: [
        {
          item: '',
          available: true,
          source: '',
        },
      ],
      abp_interest: [
        {
          abp_name: '',
          reason: '',
        },
      ],
      budget: {
        total_project_cost: '',
        fpc_contribution: '',
        grant_sought: '',
        loan_required: '',
      },
      project_location: {
        has_land: true,
        ownership: '',
        lease_years: null,
        address: '',
        area_sq_m: '',
        lat_long: '',
      },
      rating_matrix: {
        operational_age: '',
        num_shareholders_range: '',
        social_mobilization: '',
        num_women_directors_range: '',
        num_bod_meetings_range: '',
        training_participation_range: '',
        agm_conducted: false,
        agm_participation_range: '',
        audit_status: '',
        share_allotment_updated: false,
        has_ceo: false,
        has_accountant: false,
        has_ca_cs: false,
        has_seed_license: false,
        has_fertilizer_license: false,
        has_gst: false,
        has_fssai: false,
        has_export_license: false,
        linkage_type: '',
        warehouse_linkage_type: '',
        shareholder_growth: '',
        input_discount: '',
        custom_hiring_discount: '',
        market_rate_increase: '',
        has_warehouse_facility: false,
        turnover_range: '',
        convergence_scheme_count: '',
        loan_status: '',
        has_regular_repayment: false,
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
      num_shareholders_range: Yup.string().required('Number of shareholders is required'),
      social_mobilization: Yup.string().required('Social Mobilization is required'),
      num_women_directors_range: Yup.string().required('Number of women directors is required'),
      num_bod_meetings_range: Yup.string().required('Number of BoD meetings is required'),
      training_participation_range: Yup.string().required('Training participation is required'),
      agm_conducted: Yup.boolean(),
      agm_participation_range: Yup.string().required('AGM participation is required'),
      audit_status: Yup.string().required('Audit status is required'),
      share_allotment_updated: Yup.boolean(),
      has_ceo: Yup.boolean(),
      has_accountant: Yup.boolean(),
      has_ca_cs: Yup.boolean(),
      has_seed_license: Yup.boolean(),
      has_fertilizer_license: Yup.boolean(),
      has_gst: Yup.boolean(),
      has_fssai: Yup.boolean(),
      has_export_license: Yup.boolean(),
      linkage_type: Yup.string().required('Linkage type is required'),
      warehouse_linkage_type: Yup.string().required('Warehouse linkage type is required'),
      shareholder_growth: Yup.string().required('Shareholder growth is required'),
      input_discount: Yup.string().required('Input discount is required'),
      custom_hiring_discount: Yup.string().required('Custom hiring discount is required'),
      market_rate_increase: Yup.string().required('Market rate increase is required'),
      has_warehouse_facility: Yup.boolean(),
      turnover_range: Yup.string().required('Turnover range is required'),
      convergence_scheme_count: Yup.string().required('Convergence scheme count is required'),
      loan_status: Yup.string().required('Loan status is required'),
      has_regular_repayment: Yup.boolean(),
    }),
  });

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: 'board_members',
  });

  const {
    fields: staffMembersField,
    append: staffMemberAppend,
    remove: StaffMemberRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'staff_members',
  });

  const {
    fields: CollectedProduceField,
    append: CollectedProduceAppend,
    remove: CollectedProduceRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'collected_produce',
  });

  const {
    fields: BusinessActivitiesField,
    append: BusinessActivitiesAppend,
    remove: BusinessActivitiesRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'business_activities',
  });

  const {
    fields: turnoversField,
    append: turnoversAppend,
    remove: turnoversRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'turnovers',
  });

  const {
    fields: creditsField,
    append: creditsAppend,
    remove: creditsRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'credits',
  });

  const {
    fields: grantsField,
    append: grantsAppend,
    remove: grantsRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'grants',
  });

  const {
    fields: componentsField,
    append: componentsAppend,
    remove: componentsRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'components',
  });

  const {
    fields: infrastructureField,
    append: infrastructureAppend,
    remove: infrastructureRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'infrastructure',
  });

  const {
    fields: abpInterestField,
    append: abpInterestAppend,
    remove: abpInterestRemove,
  } = useFieldArray({
    control: methods.control,
    name: 'abp_interest',
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
      };

      console.log('Form submission payload:', payload);

      enqueueSnackbar('Saved Successfully!', { variant: 'success' });
      // await createNewFpc(payload);
    } catch (error) {
      console.error('FPC creation failed:', error);
    }
  };

  return (
    <Card sx={{ px: 2.5, pb: 3 }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && <FpcCreateFirst methods={methods} setStep={setStep} />}

          {step === 2 && (
            <FpcCreateSecond fields={fields} remove={remove} append={append} setStep={setStep} />
          )}
          {step === 3 && (
            <FpcCreateThird defaultValues={defaultValues?.member_categories} setStep={setStep} />
          )}
          {step === 4 && (
            <FpcCreateFourth
              field={staffMembersField}
              remove={StaffMemberRemove}
              append={staffMemberAppend}
              setStep={setStep}
            />
          )}
          {step === 5 && (
            <FpcCreateFifth
              field={BusinessActivitiesField}
              remove={BusinessActivitiesRemove}
              append={BusinessActivitiesAppend}
              setStep={setStep}
              field2={CollectedProduceField}
              remove2={CollectedProduceRemove}
              append2={CollectedProduceAppend}
            />
          )}
          {step === 6 && (
            <FpcCreateSixth
              field={turnoversField}
              remove={turnoversRemove}
              append={turnoversAppend}
              setStep={setStep}
              field2={creditsField}
              remove2={creditsRemove}
              append2={creditsAppend}
            />
          )}
          {step === 7 && (
            <FpcCreateSeventh
              field={grantsField}
              remove={grantsRemove}
              append={grantsAppend}
              setStep={setStep}
              field2={componentsField}
              remove2={componentsRemove}
              append2={componentsAppend}
            />
          )}
          {step === 8 && (
            <FpcCreateEight
              field={infrastructureField}
              remove={infrastructureRemove}
              append={infrastructureAppend}
              setStep={setStep}
              field2={abpInterestField}
              remove2={abpInterestRemove}
              append2={abpInterestAppend}
            />
          )}
          {step === 9 && <FpcCreateNinth setStep={setStep} />}
        </form>
      </FormProvider>
    </Card>
  );
}

FpcCreateEditForm.propTypes = {
  FpcId: PropTypes.string,
};
