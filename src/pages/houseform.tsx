import { CocktailForm } from "@/components/houseform/cocktail";
import { Layout } from "@/components/layout";
import { CocktailProps } from "@/components/types/cocktail";
import { Button, Code, Space, Title } from "@mantine/core";
import { FieldArray, Form } from "houseform";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function HouseForm() {
  const cocktails = [] as CocktailProps[];
  const formRef = useRef(null);

  const onSubmit = (values: any) => {
    console.log("HouseForm onSubmit", values);
  };

  return (
    <Layout title="HouseForm">
      <Title order={2} mb={12}>
        Cocktails
      </Title>
      <Form onSubmit={(values) => onSubmit(values)} ref={formRef}>
        {({ submit, value: formValues }) => (
          <div>
            <Space h="md" />
            <div>
              <Code>{JSON.stringify(formValues)}</Code>
            </div>
            <Space h="md" />
            <FieldArray name={"cocktails"} initialValue={cocktails}>
              {({ add, value }) => (
                <div>
                  <Button
                    onClick={() =>
                      add({
                        id: uuidv4(),
                        name: "",
                        ingredients: [],
                      })
                    }
                  >
                    New Cocktail
                  </Button>
                  {value.map((cocktail, index) => {
                    return (
                      <CocktailForm
                        index={index}
                        key={cocktail.id}
                        {...cocktail}
                        name={formValues.cocktails[index]?.name}
                      />
                    );
                  })}
                </div>
              )}
            </FieldArray>
            <Button onClick={submit} mt={12}>Submit</Button>
          </div>
        )}
      </Form>
    </Layout>
  );
}

export default HouseForm;
