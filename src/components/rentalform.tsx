import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RentalForm() {
    return (
        <form>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Rental Assumptions</FieldLegend>
                    <div className="grid grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="rent-purchase">Purchase price ($)</FieldLabel>
                            <Input id="rent-purchase" type="number" placeholder="200000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-down">Down payment (%)</FieldLabel>
                            <Input id="rent-down" type="number" placeholder="20" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-rate">Interest rate (%)</FieldLabel>
                            <Input id="rent-rate" type="number" step="0.01" placeholder="6" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-term">Loan term (years)</FieldLabel>
                            <Input id="rent-term" type="number" placeholder="30" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-closing">Closing costs + initial repairs ($)</FieldLabel>
                            <Input id="rent-closing" type="number" placeholder="10000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-monthly-rent">Monthly rent ($)</FieldLabel>
                            <Input id="rent-monthly-rent" type="number" placeholder="2000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-other-income">Other monthly income ($)</FieldLabel>
                            <Input id="rent-other-income" type="number" placeholder="0" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-vacancy">Vacancy rate (%)</FieldLabel>
                            <Input id="rent-vacancy" type="number" placeholder="5" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="rent-mgmt">Management fee (% of rent)</FieldLabel>
                            <Input id="rent-mgmt" type="number" placeholder="8" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="prop-tax">Annual property tax ($)</FieldLabel>
                            <Input id="prop-tax" type="number" placeholder="3000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="prop-ins">Annual insurance ($)</FieldLabel>
                            <Input id="prop-ins" type="number" placeholder="1200" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="prop-hoa">Annual HOA / other fixed costs ($)</FieldLabel>
                            <Input id="prop-hoa" type="number" placeholder="500" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="prop-maint">Annual maintenance ($)</FieldLabel>
                            <Input id="prop-maint" type="number" placeholder="2000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="prop-other-exp">Other annual expenses ($)</FieldLabel>
                            <Input id="prop-other-exp" type="number" placeholder="0" />
                        </Field>
                    </div>
                </FieldSet>

                <Field orientation="horizontal">
                    <Button variant="primary" type="submit">
                        Run rental analysis
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
