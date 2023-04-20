import { Layout } from "@/components/layout";
import { CocktailForm } from "@/components/rhf/cocktail";
import { CocktailProps } from "@/components/types/cocktail";
import { Button, Title } from "@mantine/core";
import { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export function RHF() {
  const cocktails = [] as CocktailProps[];

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cocktails,
    },
  });

  const {
    fields: cocktailFields,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control,
    name: "cocktails",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onNewCocktail = () => {
    const emptyCocktail = {
      id: uuidv4(),
      name: "",
      ingredients: [],
    };
    append(emptyCocktail);
    console.log("appending");
  };

  return (
    <Layout title="React Hook Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title order={2} mb={12}>
          Cocktails
        </Title>
        <Button onClick={onNewCocktail}>New Cocktail</Button>
        {cocktailFields.map((cocktail, index) => {
          return (
            <CocktailForm
              key={cocktail.id}
              index={index}
              {...cocktail}
              name={watch(`cocktails.${index}.name`)}
              control={control}
            />
          );
        })}
        <Button type="submit" mt={16}>
          Submit
        </Button>
      </form>
    </Layout>
  );
}

export default RHF;
