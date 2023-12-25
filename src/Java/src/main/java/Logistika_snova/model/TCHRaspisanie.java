package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТЧРасписание
 */
@Entity(name = "IISLogistika_snovaТЧРасписание")
@Table(schema = "public", name = "ТЧРасписание")
public class TCHRaspisanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаПрибыт")
    private Date датаприбыт;

    @Column(name = "ПунктПриб")
    private String пунктприб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Barzhi")
    @Convert("Barzhi")
    @Column(name = "Баржи", length = 16, unique = true, nullable = false)
    private UUID _barzhiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Barzhi", insertable = false, updatable = false)
    private Barzhi barzhi;


    public TCHRaspisanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаПрибыт() {
      return датаприбыт;
    }

    public void setДатаПрибыт(Date датаприбыт) {
      this.датаприбыт = датаприбыт;
    }

    public String getПунктПриб() {
      return пунктприб;
    }

    public void setПунктПриб(String пунктприб) {
      this.пунктприб = пунктприб;
    }


}