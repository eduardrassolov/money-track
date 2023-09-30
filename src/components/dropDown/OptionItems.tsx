
import { ButtonIcon, CustomOption, Group, Label, } from './DropDown.style';
import { HiOutlineTrash } from 'react-icons/hi2';
import SelectItem from './SelectItem';

interface IOptionsItems {
  optionList: any[];
  labelText: string;
  isDefaultCategory?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
}

export default function OptionItems({ optionList, labelText, isDefaultCategory = true, onDelete }: IOptionsItems) {
  return (
    <Group>
      <Label>{labelText}</Label>

      {optionList.map((option: any) =>
        <CustomOption key={option.id}>
          <SelectItem value={option.id}>{option.name}</SelectItem>

          {!isDefaultCategory
            ?
            <ButtonIcon onClick={(e) => onDelete(e, option.id.toString())} >
              <HiOutlineTrash />
            </ButtonIcon>
            : ""
          }

        </CustomOption>
      )
      }
    </Group >
  )
}
