package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контейнеры
 */
@Entity(name = "IISLogistika_snovaКонтейнеры")
@Table(schema = "public", name = "Контейнеры")
public class Kontejnery {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерКонтей")
    private Integer номерконтей;

    @Column(name = "НаимКонтей")
    private String наимконтей;

    @Column(name = "Длина")
    private Double длина;

    @Column(name = "Ширина")
    private Double ширина;

    @Column(name = "Высота")
    private Double высота;

    @Column(name = "Объем")
    private Double объем;

    @Column(name = "МаксВес")
    private Double максвес;


    public Kontejnery() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерКонтей() {
      return номерконтей;
    }

    public void setНомерКонтей(Integer номерконтей) {
      this.номерконтей = номерконтей;
    }

    public String getНаимКонтей() {
      return наимконтей;
    }

    public void setНаимКонтей(String наимконтей) {
      this.наимконтей = наимконтей;
    }

    public Double getДлина() {
      return длина;
    }

    public void setДлина(Double длина) {
      this.длина = длина;
    }

    public Double getШирина() {
      return ширина;
    }

    public void setШирина(Double ширина) {
      this.ширина = ширина;
    }

    public Double getВысота() {
      return высота;
    }

    public void setВысота(Double высота) {
      this.высота = высота;
    }

    public Double getОбъем() {
      return объем;
    }

    public void setОбъем(Double объем) {
      this.объем = объем;
    }

    public Double getМаксВес() {
      return максвес;
    }

    public void setМаксВес(Double максвес) {
      this.максвес = максвес;
    }


}