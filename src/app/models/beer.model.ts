export interface BeerModel {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume:
    {
      value: number;
      unit: string;
    };
  boil_volume:
    {
      value: number;
      unit: string;
    };
  method:
    {
      mash_temp:
        [{
          temp:
            {
              value: number;
              unit: string;
            },
          duration: number;
        }],
      fermentation:
        {
          temp:
            {
              value: number;
              unit: string;
            }
        }
      twist: boolean;
    }
  ingredients: {};

  food_pairing: string;
  brewers_tips: string;
  contributed_by: string;
}
