export default interface DefinitionFormInterface{
  id: string | undefined;
  marketingName: string;
  technicalName: string;
  description: string;
  startDate: Date | undefined;
  finishDate: Date | undefined;
  category: string;
  type: string;
  otherPromotionsCheckbox: boolean;
  backPromotionsCheckbox: boolean;
  benefitAmount: number | undefined;
  radioOption: number | undefined;

}
