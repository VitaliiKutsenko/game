import React, { useState } from 'react';
import { CharacterCreatorWrapper } from './characterCreatorStyled';
import { UserHero } from '@src/pages/character/components/userHero/userHero';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '@src/store/reducers/user/userActions';
import { useNavigate } from 'react-router-dom';

export const CharacterCreator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = e => {
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
