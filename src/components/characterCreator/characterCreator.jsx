import React, { useState } from 'react';
import { CharacterCreatorWrapper } from './characterCreatorStyled';
import { UserHero } from '../../pages/character/components/userHero/userHero';
import { ModalWindow } from '../../modal/modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user/userActions';
import { Navigate, useNavigate } from 'react-router-dom';

export const CharacterCreator = () => {
  const [open, onClose] = useState(true);
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
    navigate('/');
  };

  return (
    <ModalWindow open={open} onClose={() => onClose(false)}>
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
    </ModalWindow>
  );
};
