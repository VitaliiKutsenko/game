import React from 'react';
import { UserHero } from '@src/pages/character/components/userHero/userHero';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '@src/store/reducers/user/userActions';
import { useNavigate } from 'react-router-dom';
import { CharacterCreatorWrapper } from '@src/components/characterCreator/characterCreatorStyled';

interface IReactHookForms {
  name: string;
}
export const CharacterCreator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues } = useForm<IReactHookForms>();
  const onSubmit: SubmitHandler<IReactHookForms> = e => {
    dispatch(setUser(e));
    navigate('/character');
  };

  return (
    <CharacterCreatorWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="char-name">Введите имя</label>
          <input id="char-name" type="text" {...register('name')} />
        </div>
        <div>
          Выбрать персонажа
          <UserHero setValue={setValue} getValues={getValues} />
        </div>
        <input type="submit" value="Подтвердить" />
      </form>
    </CharacterCreatorWrapper>
  );
};
